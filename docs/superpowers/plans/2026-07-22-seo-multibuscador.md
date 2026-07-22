# SEO Multibuscador Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mejorar y verificar las se?ales de identidad, descubrimiento, contenido y env?o de Toldos Noa en Google, Bing, IndexNow y ChatGPT Search, y entregar un informe PDF reproducible.

**Architecture:** El sitio seguir? usando Next.js como fuente ?nica de metadatos, schema, robots y sitemap. Se a?adir?n validaciones ejecutables para identidad y descubrimiento, se separar? la l?gica pura de IndexNow de su transporte y se optimizar?n p?ginas con demanda demostrada en Search Console. Tras el despliegue, las URLs cambiadas se enviar?n por los mecanismos oficiales y se documentar? la evidencia.

**Tech Stack:** Next.js 15, TypeScript 5.7, pnpm 9, Node.js 24, ESLint 9, Vercel, Google Search Console, Bing Webmaster Tools, IndexNow, ReportLab y Poppler.

## Global Constraints

- Todo el trabajo del proyecto se realiza exclusivamente por SSH en `/home/andreh/PROYECTO/toldosnoa`.
- No se lee, usa ni modifica ninguna copia del proyecto en Windows.
- Se preserva sin incluir el cambio preexistente del usuario en `.gitignore`.
- El correo comercial correcto es `info@toldosnoa.com`.
- Toldos Noa no dispone actualmente de Google Business Profile.
- No se inventan direcciones, perfiles, rese?as, valoraciones ni credenciales.
- Solo se notifican a IndexNow URLs nuevas o modificadas.
- Google recibe sitemap y solicitudes individuales admitidas; no se usa el endpoint de ping retirado.
- Los cambios deben superar validaciones, lint, TypeScript, build y auditor?a p?blica antes de considerarse terminados.
- El PDF se crea fuera del repositorio del proyecto, se revisa visualmente y se copia al Escritorio.

---

### Task 1: Validar identidad y descubrimiento para buscadores y agentes

**Files:**
- Create: `scripts/validate-discovery.ts`
- Create: `public/llms.txt`
- Modify: `lib/constants.ts`
- Modify: `package.json`

**Interfaces:**
- Consumes: `SITE`, `EMAIL` y el contenido generado por `app/robots.ts`.
- Produces: script `pnpm seo:validate-discovery` que falla ante dominio, correo, sitemap, rastreadores o `llms.txt` incoherentes.

- [ ] **Step 1: Escribir la validaci?n antes de cambiar la identidad**

Crear `scripts/validate-discovery.ts` con aserciones que exijan:

```ts
assert.equal(SITE.url, 'https://toldosnoa.com');
assert.equal(EMAIL, 'info@toldosnoa.com');
assert.equal(robots().sitemap, 'https://toldosnoa.com/sitemap.xml');
assert.ok(allows('OAI-SearchBot'));
assert.ok(allows('GPTBot'));
assert.ok(allows('ChatGPT-User'));
assert.ok(allows('Bingbot'));
assert.ok(llmsText.includes('https://toldosnoa.com/sitemap.xml'));
assert.ok(llmsText.includes('info@toldosnoa.com'));
```

A?adir a `package.json`:

```json
"seo:validate-discovery": "tsx scripts/validate-discovery.ts"
```

- [ ] **Step 2: Ejecutar la validaci?n y confirmar el fallo**

Run: `pnpm seo:validate-discovery`

Expected: FAIL porque `EMAIL` todav?a termina en `.es` y `public/llms.txt` a?n no existe.

- [ ] **Step 3: Corregir la identidad y crear llms.txt**

Cambiar en `lib/constants.ts`:

```ts
export const EMAIL = 'info@toldosnoa.com';
```

Crear `public/llms.txt` con informaci?n factual:

```text
# Toldos Noa

> Fabricaci?n, instalaci?n y reparaci?n de toldos a medida en Madrid y Tarragona.

- Sitio oficial: https://toldosnoa.com/
- Servicios: https://toldosnoa.com/#servicios
- Consejos t?cnicos: https://toldosnoa.com/consejos
- Zonas: Madrid y provincia de Tarragona
- Contacto: https://toldosnoa.com/contacto
- Correo: info@toldosnoa.com
- Tel?fono: +34 681 924 338
- Sitemap: https://toldosnoa.com/sitemap.xml

El contenido oficial y actualizado es el HTML can?nico y el sitemap del dominio.
```

- [ ] **Step 4: Ejecutar la validaci?n de descubrimiento**

Run: `pnpm seo:validate-discovery`

Expected: PASS con `Identidad y descubrimiento SEO validados`.

- [ ] **Step 5: Confirmar el alcance del diff**

Run: `git diff --check -- lib/constants.ts package.json public/llms.txt scripts/validate-discovery.ts`

Expected: sin salida y c?digo 0.

### Task 2: Convertir IndexNow en un env?o selectivo y comprobable

**Files:**
- Create: `lib/indexnow.ts`
- Create: `scripts/indexnow-submit.test.ts`
- Modify: `scripts/indexnow-submit.ts`
- Modify: `package.json`

**Interfaces:**
- Produces: `normalizeSubmittedUrls(values: string[], siteUrl: string): string[]` y `buildIndexNowPayload(urls: string[], siteUrl: string, key: string)`.
- Consumes: argumentos posicionales de CLI como `/consejos/nueva-guia` o URLs absolutas del host correcto.
- Rechaza: lista vac?a, host externo, duplicados no normalizados y m?s de 10.000 URLs.

- [ ] **Step 1: Escribir pruebas de la l?gica pura**

Crear `scripts/indexnow-submit.test.ts` con `node:test` y casos que comprueben:

```ts
assert.deepEqual(
  normalizeSubmittedUrls(['/consejos/a', 'https://toldosnoa.com/consejos/a'], SITE.url),
  ['https://toldosnoa.com/consejos/a']
);
assert.throws(
  () => normalizeSubmittedUrls(['https://example.com/ajena'], SITE.url),
  /no pertenece/
);
assert.throws(() => normalizeSubmittedUrls([], SITE.url), /al menos una URL/);
```

A?adir a `package.json`:

```json
"test:indexnow": "tsx --test scripts/indexnow-submit.test.ts"
```

- [ ] **Step 2: Ejecutar las pruebas y confirmar el fallo**

Run: `pnpm test:indexnow`

Expected: FAIL porque `lib/indexnow.ts` no existe.

- [ ] **Step 3: Implementar normalizaci?n y payload**

Crear `lib/indexnow.ts` con las firmas exactas del bloque Interfaces. El payload debe ser:

```ts
{
  host: new URL(siteUrl).host,
  key,
  keyLocation: `${siteUrl}/${key}.txt`,
  urlList: normalizedUrls
}
```

Modificar `scripts/indexnow-submit.ts` para leer `process.argv.slice(2)`, usar la l?gica pura y enviar solo esas URLs a `https://api.indexnow.org/indexnow`. Aceptar 200 y 202; imprimir y devolver error para 400, 403, 422 o 429.

- [ ] **Step 4: Ejecutar las pruebas**

Run: `pnpm test:indexnow`

Expected: todos los casos PASS.

- [ ] **Step 5: Confirmar que una ejecuci?n sin URLs se rechaza antes de la red**

Run: `pnpm indexnow`

Expected: error `Debes indicar al menos una URL nueva o modificada`.

### Task 3: Mejorar p?ginas con demanda demostrada sin canibalizaci?n

**Files:**
- Modify: `scripts/validate-blog.ts`
- Modify: `lib/posts/tn-10.ts`
- Modify: `lib/posts/tn-07.ts`
- Modify: `lib/posts/tn-09.ts`
- Modify: `lib/posts/tn-25.ts`

**Interfaces:**
- Consumes: cat?logo `POSTS`.
- Produces: snippets y enlaces internos comprobados para la gu?a de precios y las tres gu?as de reparaci?n con mayor crecimiento.

- [ ] **Step 1: A?adir aserciones de contenido antes de editar los posts**

Ampliar `scripts/validate-blog.ts` para exigir:

```ts
const pricePost = POSTS.find((post) => post.slug === 'cuanto-cuesta-un-toldo');
assert.equal(pricePost?.updated, '2026-07-22');
assert.match(pricePost?.title ?? '', /Precios de toldos en 2026/);
assert.ok(pricePost?.metaDescription.includes('presupuesto'));
assert.ok(pricePost?.internalLinks?.some((link) => link.href === '/consejos/toldo-a-medida-o-estandar'));

const motor = POSTS.find((post) => post.slug === 'reparar-motor-toldo');
assert.ok(motor?.internalLinks?.some((link) => link.href === '/consejos/toldo-no-sube-ni-baja'));

const lona = POSTS.find((post) => post.slug === 'tensar-lona-toldo-descolgada');
assert.ok(lona?.internalLinks?.some((link) => link.href === '/consejos/toldo-descuadrado-o-torcido-solucion'));

const torcido = POSTS.find((post) => post.slug === 'toldo-descuadrado-o-torcido-solucion');
assert.ok(torcido?.internalLinks?.some((link) => link.href === '/consejos/tensar-lona-toldo-descolgada'));
```

- [ ] **Step 2: Ejecutar la validaci?n y confirmar el fallo**

Run: `pnpm seo:validate-blog`

Expected: FAIL en la primera de las nuevas aserciones.

- [ ] **Step 3: Actualizar snippet y fecha real de la gu?a de precios**

Usar en `lib/posts/tn-10.ts`:

```ts
title: 'Precios de toldos en 2026: cu?nto cuesta cada tipo',
metaDescription:
  'Precios de toldos en 2026 por tipo y m?: compara opciones, motores e instalaci?n y pide un presupuesto a medida en Madrid o Tarragona.',
updated: '2026-07-22',
```

A?adir a `internalLinks`:

```ts
{ label: 'Toldo a medida o est?ndar', href: '/consejos/toldo-a-medida-o-estandar' }
```

- [ ] **Step 4: A?adir enlaces contextuales entre gu?as de reparaci?n**

A?adir exactamente los enlaces requeridos por las aserciones del Step 1, manteniendo los enlaces a servicio y contacto existentes.

- [ ] **Step 5: Ejecutar la validaci?n del cat?logo**

Run: `pnpm seo:validate-blog`

Expected: `Catalogo SEO validado: 72 articulos, 4 nuevos`.

### Task 4: Verificaci?n local completa y medici?n de rendimiento

**Files:**
- No crea archivos de proyecto.
- Verify: portada, `/toldos-en/madrid`, `/servicios/reparaciones`, `/consejos/cuanto-cuesta-un-toldo`.

**Interfaces:**
- Consumes: build de producci?n.
- Produces: evidencia de lint, tipos, build, rutas est?ticas y Lighthouse.

- [ ] **Step 1: Ejecutar todas las validaciones**

Run:

```bash
pnpm seo:validate-discovery
pnpm seo:validate-blog
pnpm test:indexnow
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Expected: todos los comandos con c?digo 0 y 98 p?ginas est?ticas o m?s.

- [ ] **Step 2: Revisar el diff excluyendo .gitignore**

Run:

```bash
git diff --check -- . ':!.gitignore'
git diff --stat
git status --short
```

Expected: `.gitignore` permanece modificado y sin stage; solo los archivos SEO de este plan se preparan para commit.

- [ ] **Step 3: Ejecutar Lighthouse de laboratorio**

Run: `pnpm dlx lighthouse https://toldosnoa.com/ --only-categories=performance,seo,accessibility,best-practices --chrome-flags=--headless --output=json --output-path=/tmp/toldosnoa-lighthouse.json`

Expected: informe JSON v?lido. Los resultados se registran como laboratorio y no se confunden con Core Web Vitals de campo.

### Task 5: Commit, despliegue y se?ales oficiales de descubrimiento

**Files:**
- Commit: solo archivos de Tasks 1 a 3 y este plan ya documentado.
- External systems: GitHub, Vercel, Google Search Console, Bing Webmaster Tools, IndexNow.

**Interfaces:**
- Produces: commit de implementaci?n, despliegue Ready y recepci?n de URLs/sitemap por plataformas.

- [ ] **Step 1: Crear commit de implementaci?n**

Preparar ?nicamente:

```text
lib/constants.ts
lib/indexnow.ts
lib/posts/tn-07.ts
lib/posts/tn-09.ts
lib/posts/tn-10.ts
lib/posts/tn-25.ts
package.json
public/llms.txt
scripts/indexnow-submit.test.ts
scripts/indexnow-submit.ts
scripts/validate-blog.ts
scripts/validate-discovery.ts
```

Run: `git commit -m feat-seo-multibuscador-discovery`

Expected: `.gitignore` contin?a fuera del commit.

- [ ] **Step 2: Actualizar main y publicar**

Run: `git fetch origin && git rev-list --left-right --count origin/main...main && git push origin main`

Expected: push aceptado sin reescritura de historial.

- [ ] **Step 3: Verificar Vercel y producci?n**

Comprobar despliegue Production Ready. Ejecutar:

```bash
pnpm seo:audit-live
curl -I https://toldosnoa.com/llms.txt
curl -A OAI-SearchBot -I https://toldosnoa.com/
curl -A Bingbot -I https://toldosnoa.com/
```

Expected: auditor?a OK y HTTP 200.

- [ ] **Step 4: Enviar URLs modificadas a IndexNow**

Run:

```bash
pnpm indexnow -- / /consejos /consejos/engranaje-torno-toldo-manual /consejos/techo-retractil-lona-terraza /consejos/toldo-cofre-para-ventana /consejos/toldo-a-medida-o-estandar /consejos/cuanto-cuesta-un-toldo /consejos/reparar-motor-toldo /consejos/tensar-lona-toldo-descolgada /consejos/toldo-descuadrado-o-torcido-solucion
```

Expected: HTTP 200 o 202.

- [ ] **Step 5: Completar Google Search Console**

Confirmar sitemap de 91 URLs y solicitar indexaci?n para las p?ginas nuevas o modificadas prioritarias mediante Inspecci?n de URLs. Si la interfaz limita solicitudes, conservar sitemap correcto y registrar la limitaci?n sin clics ambiguos.

- [ ] **Step 6: Completar Bing Webmaster Tools**

Importar `https://toldosnoa.com/` desde Google Search Console o verificarla por el m?todo ofrecido, enviar `https://toldosnoa.com/sitemap.xml` y comprobar IndexNow. CAPTCHA, OTP o nueva autenticaci?n se dejan en handoff para el usuario.

### Task 6: Crear, revisar y entregar el informe PDF

**Files:**
- Create outside project: `outputs/informe-seo-toldos-noa-2026-07-22.pdf`
- Copy: Escritorio del usuario.

**Interfaces:**
- Consumes: m?tricas GSC, diff, commits, pruebas, despliegue, respuestas IndexNow y estado de Google/Bing.
- Produces: PDF visualmente validado, con p?ginas numeradas y fuentes oficiales legibles.

- [ ] **Step 1: Generar el PDF con ReportLab**

Incluir:

1. Resumen ejecutivo.
2. Comparaci?n de dos quincenas con la limitaci?n de base parcial.
3. Auditor?a inicial.
4. Cambios de c?digo y contenido.
5. Google Search Console.
6. Bing e IndexNow.
7. ChatGPT Search y rastreadores.
8. Rendimiento y pruebas.
9. Commits, despliegue y evidencias.
10. Acciones que requieren al propietario, incluido Google Business Profile.
11. Fuentes oficiales.

- [ ] **Step 2: Validar estructura y texto**

Run: `pdfinfo` y extracci?n con `pypdf`.

Expected: PDF legible, p?ginas numeradas y sin texto vac?o.

- [ ] **Step 3: Renderizar e inspeccionar todas las p?ginas**

Run: `pdftoppm -png informe-seo-toldos-noa-2026-07-22.pdf work/pdf-preview/page`

Expected: ning?n texto cortado, tabla solapada, car?cter roto ni elemento fuera de margen.

- [ ] **Step 4: Copiar al Escritorio**

Copiar el PDF final a `C:\Users\Andres\Desktop\informe-seo-toldos-noa-2026-07-22.pdf` y conservar la copia de entregables.
