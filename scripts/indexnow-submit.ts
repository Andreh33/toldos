/**
 * Toldos Noa — Envío de URLs a IndexNow (Bing, Yandex, Seznam…).
 *
 * IndexNow notifica a los buscadores las URLs nuevas o modificadas. La clave
 * pública debe estar desplegada en https://toldosnoa.com/<KEY>.txt antes de
 * ejecutar este script.
 *
 * Solo envía las rutas indicadas para evitar notificaciones masivas innecesarias.
 *
 * Uso (tras desplegar): pnpm indexnow -- /ruta-1 /ruta-2
 */
import { SITE } from '../lib/constants';
import { normalizeSubmittedUrls } from '../lib/indexnow';

const KEY = '4f4d1d9240d6d784f0698b66d29af420';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const host = new URL(SITE.url).host;
const keyLocation = `${SITE.url}/${KEY}.txt`;
async function main() {
  const urlList = normalizeSubmittedUrls(process.argv.slice(2), SITE.url);

  const payload = { host, key: KEY, keyLocation, urlList };

  console.log(`• Enviando ${urlList.length} URLs a IndexNow…`);
  urlList.forEach((u) => console.log(`  - ${u}`));

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  // IndexNow responde 200 (OK) o 202 (aceptado, validándose).
  if (res.status === 200 || res.status === 202) {
    console.log(`✔ IndexNow aceptó el envío (HTTP ${res.status}).`);
    return;
  }
  throw new Error(`IndexNow devolvió HTTP ${res.status}. ${await res.text().catch(() => '')}`);
}

main().catch((err) => {
  console.error('✗ Envío a IndexNow fallido:', err);
  process.exit(1);
});
