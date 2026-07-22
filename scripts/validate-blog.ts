import assert from 'node:assert/strict';
import { POSTS } from '../lib/blog';

const REQUIRED_SLUGS = [
  'engranaje-torno-toldo-manual',
  'techo-retractil-lona-terraza',
  'toldo-cofre-para-ventana',
  'toldo-a-medida-o-estandar',
] as const;

const slugs = POSTS.map((post) => post.slug);
const titles = POSTS.map((post) => post.title);

assert.equal(POSTS.length, 72, 'El catalogo debe contener 72 articulos');
assert.equal(new Set(slugs).size, slugs.length, 'No puede haber slugs duplicados');
assert.equal(new Set(titles).size, titles.length, 'No puede haber titulos duplicados');

for (const slug of REQUIRED_SLUGS) {
  const post = POSTS.find((candidate) => candidate.slug === slug);
  assert.ok(post, `Falta el articulo ${slug}`);
  assert.equal(post.date, '2026-07-22', `${slug}: fecha de publicacion incorrecta`);
  assert.ok(
    post.metaDescription.length >= 120 && post.metaDescription.length <= 165,
    `${slug}: meta description fuera de 120-165 caracteres`
  );
  assert.ok(post.excerpt.length >= 180, `${slug}: entradilla demasiado breve`);
  assert.ok(post.readingMinutes >= 10, `${slug}: profundidad insuficiente`);
  assert.ok(post.keywords.length >= 6, `${slug}: faltan keywords de apoyo`);
  assert.ok(post.sections.length >= 7, `${slug}: faltan secciones`);
  assert.ok(
    post.sections.some((section) => section.table),
    `${slug}: debe incluir una tabla util`
  );
  assert.ok(
    post.sections.some((section) => (section.bullets?.length ?? 0) >= 4),
    `${slug}: debe incluir al menos una lista practica`
  );
  assert.ok(
    (post.internalLinks?.length ?? 0) >= 3,
    `${slug}: faltan enlaces internos`
  );
  assert.ok(
    post.internalLinks?.some((link) => link.href.startsWith('/servicios/')),
    `${slug}: falta un enlace a servicio`
  );
  assert.ok(
    post.internalLinks?.some((link) => link.href === '/contacto'),
    `${slug}: falta el enlace de conversion`
  );
}

const pricePost = POSTS.find((post) => post.slug === 'cuanto-cuesta-un-toldo');
assert.equal(pricePost?.updated, '2026-07-22');
assert.match(pricePost?.title ?? '', /Precios de toldos en 2026/);
assert.ok(pricePost?.metaDescription.includes('presupuesto'));
assert.ok(
  pricePost?.internalLinks?.some(
    (link) => link.href === '/consejos/toldo-a-medida-o-estandar'
  )
);

const motorPost = POSTS.find((post) => post.slug === 'reparar-motor-toldo');
assert.ok(
  motorPost?.internalLinks?.some(
    (link) => link.href === '/consejos/toldo-no-sube-ni-baja'
  )
);

const tensionPost = POSTS.find(
  (post) => post.slug === 'tensar-lona-toldo-descolgada'
);
assert.ok(
  tensionPost?.internalLinks?.some(
    (link) => link.href === '/consejos/toldo-descuadrado-o-torcido-solucion'
  )
);

const crookedPost = POSTS.find(
  (post) => post.slug === 'toldo-descuadrado-o-torcido-solucion'
);
assert.ok(
  crookedPost?.internalLinks?.some(
    (link) => link.href === '/consejos/tensar-lona-toldo-descolgada'
  )
);

console.log(
  `Catalogo SEO validado: ${POSTS.length} articulos, ${REQUIRED_SLUGS.length} nuevos`
);
