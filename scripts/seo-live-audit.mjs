const SITE_URL = (process.env.SEO_SITE_URL ?? 'https://toldosnoa.com').replace(/\/$/, '');
const CONCURRENCY = 8;
const REQUEST_TIMEOUT_MS = 15_000;

function htmlAttribute(html, relation) {
  const relationFirst = new RegExp(
    `<link[^>]+rel=["']${relation}["'][^>]+href=["']([^"']+)["']`,
    'i'
  );
  const hrefFirst = new RegExp(
    `<link[^>]+href=["']([^"']+)["'][^>]+rel=["']${relation}["']`,
    'i'
  );
  return html.match(relationFirst)?.[1] ?? html.match(hrefFirst)?.[1] ?? null;
}

async function request(url, options = {}) {
  return fetch(url, {
    redirect: 'manual',
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    ...options,
  });
}

const sitemapResponse = await request(`${SITE_URL}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`No se pudo leer el sitemap: HTTP ${sitemapResponse.status}`);
}

const sitemapXml = await sitemapResponse.text();
const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim());
const uniqueUrls = [...new Set(urls)];
if (urls.length === 0 || urls.length !== uniqueUrls.length) {
  throw new Error('El sitemap está vacío o contiene URLs duplicadas.');
}

const issues = [];
const titles = new Map();
const internalLinks = new Set();
let successfulPages = 0;
let canonicalPages = 0;
let singleH1Pages = 0;
let validStructuredDataBlocks = 0;
let cursor = 0;

async function auditPage(url) {
  let response;
  try {
    response = await request(url);
  } catch {
    issues.push(`${url}: no respondió dentro del límite`);
    return;
  }

  if (response.status !== 200) {
    issues.push(`${url}: HTTP ${response.status}`);
    return;
  }
  successfulPages += 1;

  const html = await response.text();
  if (/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)) {
    issues.push(`${url}: contiene noindex`);
  }

  const canonical = htmlAttribute(html, 'canonical');
  let canonicalMatches = false;
  try {
    canonicalMatches = canonical !== null && new URL(canonical).href === new URL(url).href;
  } catch {
    canonicalMatches = false;
  }
  if (canonicalMatches) canonicalPages += 1;
  else issues.push(`${url}: canonical ${canonical ?? 'ausente'}`);

  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, ' ').trim();
  if (!title) {
    issues.push(`${url}: title ausente`);
  } else {
    const matches = titles.get(title) ?? [];
    matches.push(url);
    titles.set(title, matches);
  }

  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
  if (h1Count === 1) singleH1Pages += 1;
  else issues.push(`${url}: ${h1Count} encabezados H1`);

  const structuredData = [
    ...html.matchAll(
      /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
    ),
  ];
  for (const [, source] of structuredData) {
    try {
      JSON.parse(source);
      validStructuredDataBlocks += 1;
    } catch {
      issues.push(`${url}: JSON-LD inválido`);
    }
  }

  for (const match of html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)) {
    try {
      const destination = new URL(match[1], url);
      if (destination.origin !== SITE_URL || destination.pathname.startsWith('/api/')) continue;
      destination.hash = '';
      destination.search = '';
      internalLinks.add(destination.toString());
    } catch {
      issues.push(`${url}: enlace interno no interpretable`);
    }
  }
}

async function worker() {
  while (cursor < uniqueUrls.length) {
    const index = cursor;
    cursor += 1;
    await auditPage(uniqueUrls[index]);
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

for (const [title, titleUrls] of titles) {
  if (titleUrls.length > 1) {
    issues.push(`Title duplicado en ${titleUrls.map((url) => new URL(url).pathname).join(', ')}: ${title}`);
  }
}

for (const url of internalLinks) {
  if (uniqueUrls.includes(url)) continue;
  try {
    const response = await request(url, { method: 'HEAD' });
    if (response.status >= 400) issues.push(`${url}: enlace interno HTTP ${response.status}`);
  } catch {
    issues.push(`${url}: enlace interno no respondió`);
  }
}

console.log(`Sitemap: ${uniqueUrls.length} URLs únicas`);
console.log(`HTTP 200: ${successfulPages}/${uniqueUrls.length}`);
console.log(`Canonical exacta: ${canonicalPages}/${uniqueUrls.length}`);
console.log(`Un único H1: ${singleH1Pages}/${uniqueUrls.length}`);
console.log(`Bloques JSON-LD válidos: ${validStructuredDataBlocks}`);
console.log(`Enlaces internos distintos comprobados: ${internalLinks.size}`);

if (issues.length > 0) {
  console.error(`Incidencias: ${issues.length}`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log('SEO live audit: OK');
}
