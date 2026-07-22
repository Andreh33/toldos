# Dise?o SEO multibuscador de Toldos Noa

Fecha: 2026-07-22
Propiedad: https://toldosnoa.com/
Repositorio autorizado: /home/andreh/PROYECTO/toldosnoa

## Objetivo

Maximizar la capacidad de descubrimiento, indexaci?n, citaci?n y posicionamiento org?nico de Toldos Noa en Google, Bing y ChatGPT Search mediante se?ales t?cnicas verificables, contenido ?til y env?os admitidos por cada plataforma. El objetivo es mejorar sostenidamente visibilidad, clics y oportunidades comerciales; ninguna actuaci?n puede garantizar una posici?n concreta.

## Restricciones y decisiones confirmadas

- Todo el trabajo del proyecto se realiza exclusivamente por SSH en el repositorio Linux remoto.
- No se lee, usa ni modifica ninguna copia del proyecto en Windows.
- Se preserva sin incluir el cambio preexistente del usuario en .gitignore.
- El correo comercial correcto es info@toldosnoa.com.
- Toldos Noa no dispone actualmente de Google Business Profile.
- El usuario autoriza importar o dar de alta la propiedad en Bing Webmaster Tools mediante la sesi?n de Google abierta y aceptar las condiciones necesarias.
- No se inventar?n direcciones, perfiles sociales, rese?as, valoraciones ni entidades externas.
- No se utilizar?n pings an?nimos obsoletos, redes de enlaces artificiales, contenido duplicado ni automatizaciones que puedan considerarse spam.

## Evidencia de partida

### Google Search Console

Comparaci?n del 7 al 20 de julio de 2026 frente al 23 de junio al 6 de julio:

- Clics: 30 frente a 1.
- Impresiones: 1.082 frente a 88.
- CTR: 2,8 % frente a 1,1 %.
- Posici?n media: 11,5 frente a 23,9.
- La primera ventana comparativa es parcial porque el dominio comenz? a acumular datos a finales de junio; se informar? esta limitaci?n junto con el crecimiento.

P?ginas con mayor crecimiento en la ?ltima quincena:

- /consejos/reparar-motor-toldo: 8 clics y 204 impresiones.
- /consejos/toldo-descuadrado-o-torcido-solucion: 5 clics y 87 impresiones.
- /consejos/tensar-lona-toldo-descolgada: 4 clics y 194 impresiones.
- /consejos/toldo-no-sube-ni-baja: 2 clics y 54 impresiones.
- /toldos-en/madrid: 2 clics y 25 impresiones.
- /consejos/cuanto-cuesta-un-toldo: 1 clic y 111 impresiones.

Google no informa de acciones manuales, problemas de seguridad, errores HTTPS ni elementos Breadcrumb no v?lidos. Core Web Vitals todav?a no dispone de suficiente tr?fico de campo para m?vil o escritorio.

### Estado t?cnico p?blico

- Sitemap correcto con 91 URLs descubiertas.
- 91/91 URLs responden HTTP 200, tienen canonical exacto y un ?nico H1.
- 176 bloques JSON-LD v?lidos.
- robots.txt referencia el sitemap y permite el rastreo general.
- OAI-SearchBot, GPTBot, ChatGPT-User y Bingbot reciben HTTP 200.
- La clave p?blica de IndexNow responde HTTP 200.
- El repositorio ya contiene un cliente IndexNow, pero su comportamiento actual env?a todas las URLs del sitemap y debe ajustarse para evitar notificar p?ginas sin cambios.

## Enfoque aprobado

Se aplica un enfoque intensivo y conforme a las directrices oficiales. Se optimizan las se?ales que controlamos y se evitan t?cnicas que solo generan ruido o riesgo.

## Arquitectura

### 1. Identidad y entidad

La constante central del sitio ser? la ?nica fuente de verdad para dominio, tel?fono y correo. Se cambiar? el correo .es por info@toldosnoa.com en contenido, metadatos y schema cuando derive de esa constante.

No se a?adir? sameAs, direcci?n postal, Google Business Profile ni aggregateRating sin una fuente p?blica y confirmada. La ausencia de Google Business Profile quedar? documentada como limitaci?n para competir en el paquete local de mapas.

### 2. Rastreo y comprensi?n

robots.txt mantendr? acceso abierto a buscadores y asistentes. Se conservar?n permisos expl?citos para OAI-SearchBot, GPTBot y ChatGPT-User, y se verificar? que Googlebot y Bingbot no est?n bloqueados por robots, Vercel o una capa de seguridad.

Se a?adir? un llms.txt breve y factual como ayuda complementaria para agentes que decidan consumirlo. El archivo no se presentar? como un est?ndar reconocido por Google, Bing u OpenAI ni como factor de ranking.

El sitemap seguir? siendo la fuente completa de URLs indexables. lastmod solo cambiar? cuando exista una modificaci?n significativa del contenido.

### 3. Calidad y enlazado

Se auditar?n t?tulos, descripciones, canonicals, H1, im?genes, datos estructurados y enlaces internos de las 91 URLs.

Las mejoras de contenido se concentrar?n en p?ginas con demanda demostrada:

- Reforzar conversi?n y enlaces comerciales desde las gu?as de reparaci?n que ya atraen clics.
- Revisar el snippet y la respuesta inicial de /consejos/cuanto-cuesta-un-toldo, que tiene muchas impresiones y CTR mejorable.
- Reforzar la relaci?n entre /toldos-en/madrid, servicios relevantes y las nuevas gu?as sin duplicar intenci?n.
- Mantener separados los temas de precio, presupuesto, reparaci?n, toldo cofre, techo retr?ctil y toldo a medida para evitar canibalizaci?n.

No se crear?n nuevas p?ginas solo para repetir palabras clave o ciudades.

### 4. Descubrimiento y env?os

IndexNow se convertir? en un env?o expl?cito de URLs nuevas, modificadas o eliminadas. El script validar? host, clave, pertenencia de las URLs y respuestas 200/202. Los c?digos 403, 422 o 429 detendr?n el proceso con un mensaje claro.

Tras el despliegue se enviar?n las URLs realmente afectadas: las cuatro gu?as publicadas el 22 de julio, /consejos y las p?ginas modificadas en esta fase.

En Google se mantendr? el sitemap enviado en Search Console. Las solicitudes individuales se limitar?n a URLs nuevas o prioritarias. No se usar? el antiguo endpoint de ping de sitemaps, retirado por Google.

En Bing Webmaster Tools se importar? o verificar? la propiedad, se enviar? sitemap.xml y se comprobar? la recepci?n de IndexNow. Si la sesi?n exige autenticaci?n adicional, CAPTCHA o verificaci?n personal, el flujo se dejar? abierto para intervenci?n del usuario sin eludirla.

ChatGPT Search no ofrece un bot?n p?blico equivalente a Search Console. La cobertura se maximizar? permitiendo OAI-SearchBot, entregando HTML renderizado, canonicals, sitemap, datos estructurados y contenido citable.

### 5. Rendimiento y experiencia

Se ejecutar? una medici?n reproducible sobre portada, una landing local, un servicio y una gu?a. Se priorizar?n correcciones que afecten LCP, CLS, INP, peso de im?genes, fuentes o JavaScript. No se har?n cambios visuales especulativos si la evidencia no muestra un problema.

La falta actual de datos de campo de Core Web Vitals se distinguir? de los resultados de laboratorio.

### 6. Verificaci?n y entrega

Antes de publicar:

- Validaci?n del cat?logo y las reglas SEO.
- ESLint.
- TypeScript sin emisi?n.
- Build de producci?n.
- Auditor?a del HTML generado.
- Revisi?n del diff y comprobaci?n de que .gitignore permanece fuera de los commits.

Despu?s de publicar:

- Estado Ready del despliegue de Vercel.
- Auditor?a p?blica de todas las URLs del sitemap.
- HTTP 200 para robots.txt, sitemap.xml, clave IndexNow y llms.txt.
- Pruebas con agentes de usuario Googlebot, Bingbot, OAI-SearchBot y GPTBot.
- Env?o IndexNow de URLs afectadas.
- Confirmaci?n de sitemap en Google y Bing.
- Registro de cualquier limitaci?n externa.

## Manejo de fallos

- Un error de build, lint, TypeScript o auditor?a bloquea el push.
- Una discrepancia de identidad bloquea el cambio correspondiente.
- Un rechazo de IndexNow no se reintenta en bucle.
- Una solicitud de CAPTCHA, contrase?a, OTP o verificaci?n empresarial se entrega al usuario.
- Una plataforma que no garantice indexaci?n se describir? como se?al de descubrimiento, nunca como indexaci?n asegurada.
- No se modificar?n archivos ajenos al alcance ni cambios preexistentes del usuario.

## Definici?n de terminado

El trabajo se considerar? terminado cuando:

1. Los cambios est?n probados, revisados, confirmados en producci?n y enviados a Git.
2. Google mantenga un sitemap correcto y actualizado.
3. Bing tenga la propiedad y el sitemap configurados, o exista una evidencia concreta del ?nico paso de autenticaci?n que deba completar el usuario.
4. IndexNow acepte las URLs modificadas.
5. Los rastreadores de OpenAI y buscadores reciban contenido accesible.
6. El informe PDF incluya evidencia inicial, cambios, pruebas, env?os, resultados y pr?ximos pasos.
7. El PDF final validado visualmente est? guardado en el Escritorio y en la carpeta de entregables de esta tarea.

## Fuera de alcance

- Garantizar top 1.
- Comprar enlaces, rese?as o tr?fico.
- Crear una ficha de Google Business Profile sin datos y verificaci?n del negocio.
- Cambiar datos legales o corporativos no confirmados.
- Usar APIs de indexaci?n reservadas para tipos de contenido que el sitio no publica.
