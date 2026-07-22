export interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

const MAX_URLS_PER_REQUEST = 10_000;

export function normalizeSubmittedUrls(
  values: string[],
  siteUrl: string
): string[] {
  if (values.length === 0) {
    throw new Error('Debes indicar al menos una URL nueva o modificada');
  }

  const site = new URL(siteUrl);
  const normalized = values.map((value) => {
    const url = new URL(value, `${site.origin}/`);

    if (url.origin !== site.origin) {
      throw new Error(`La URL ${url.toString()} no pertenece a ${site.host}`);
    }

    url.hash = '';
    return url.toString();
  });
  const uniqueUrls = [...new Set(normalized)];

  if (uniqueUrls.length > MAX_URLS_PER_REQUEST) {
    throw new Error(
      `IndexNow admite como máximo ${MAX_URLS_PER_REQUEST} URLs por solicitud`
    );
  }

  return uniqueUrls;
}

export function buildIndexNowPayload(
  urls: string[],
  siteUrl: string,
  key: string
): IndexNowPayload {
  const normalizedUrls = normalizeSubmittedUrls(urls, siteUrl);
  const site = new URL(siteUrl);

  return {
    host: site.host,
    key,
    keyLocation: `${site.origin}/${key}.txt`,
    urlList: normalizedUrls,
  };
}
