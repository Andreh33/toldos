/**
 * Toldos Noa — Envío de URLs a IndexNow (Bing, Yandex, Seznam…).
 *
 * IndexNow notifica a los buscadores que las URLs del sitio han cambiado para
 * que las (re)indexen al instante. La clave pública debe estar desplegada en
 *   https://toldosnoa.es/<KEY>.txt
 * (fichero public/<KEY>.txt) ANTES de ejecutar este script, o IndexNow lo
 * rechazará con un 403.
 *
 * Toma la lista de URLs del sitemap.xml ya desplegado (fuente única de verdad),
 * así siempre coincide con lo que indexa Google y se incluyen los posts.
 *
 * Uso (tras desplegar):  pnpm indexnow
 */
import { SITE } from '../lib/constants';

const KEY = '4f4d1d9240d6d784f0698b66d29af420';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const host = new URL(SITE.url).host; // p.ej. "toldosnoa.es"
const keyLocation = `${SITE.url}/${KEY}.txt`;
const sitemapUrl = `${SITE.url}/sitemap.xml`;

async function getUrlsFromSitemap(): Promise<string[]> {
  const res = await fetch(sitemapUrl, { headers: { 'User-Agent': 'toldosnoa-indexnow' } });
  if (!res.ok) {
    throw new Error(`No se pudo leer el sitemap (${res.status}): ${sitemapUrl}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) =>
    m[1].trim().replace(/&amp;/g, '&')
  );
  return [...new Set(urls)];
}

async function main() {
  const urlList = await getUrlsFromSitemap();
  if (urlList.length === 0) {
    throw new Error('El sitemap no devolvió ninguna URL. Abortando.');
  }

  const payload = { host, key: KEY, keyLocation, urlList };

  console.log(`• Enviando ${urlList.length} URLs a IndexNow…`);
  urlList.forEach((u) => console.log(`  - ${u}`));

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  // IndexNow responde 200 (OK) o 202 (aceptado, validándose).
  if (res.ok) {
    console.log(`✔ IndexNow aceptó el envío (HTTP ${res.status}).`);
  } else {
    const body = await res.text().catch(() => '');
    console.error(`✗ IndexNow devolvió HTTP ${res.status}. ${body}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('✗ Envío a IndexNow fallido:', err);
  process.exit(1);
});
