import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildIndexNowPayload,
  normalizeSubmittedUrls,
} from '../lib/indexnow';
import { SITE } from '../lib/constants';

test('normaliza rutas y elimina URLs duplicadas', () => {
  assert.deepEqual(
    normalizeSubmittedUrls(
      ['/consejos/a', 'https://toldosnoa.com/consejos/a'],
      SITE.url
    ),
    ['https://toldosnoa.com/consejos/a']
  );
});


test('ignora el separador -- que transmite pnpm', () => {
  assert.deepEqual(
    normalizeSubmittedUrls(['--', '/consejos'], SITE.url),
    ['https://toldosnoa.com/consejos']
  );
});

test('rechaza URLs de otro host', () => {
  assert.throws(
    () => normalizeSubmittedUrls(['https://example.com/ajena'], SITE.url),
    /no pertenece/
  );
});

test('rechaza una lista vacía', () => {
  assert.throws(
    () => normalizeSubmittedUrls([], SITE.url),
    /al menos una URL/
  );
});

test('construye un payload con clave alojada en el dominio', () => {
  const payload = buildIndexNowPayload(
    ['https://toldosnoa.com/consejos/a'],
    SITE.url,
    'abc123'
  );

  assert.deepEqual(payload, {
    host: 'toldosnoa.com',
    key: 'abc123',
    keyLocation: 'https://toldosnoa.com/abc123.txt',
    urlList: ['https://toldosnoa.com/consejos/a'],
  });
});
