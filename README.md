# Toldos Noa

Web profesional para Toldos Noa — fabricación e instalación de toldos a medida en Madrid y Tarragona.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript estricto
- Tailwind CSS 3.4 + tailwindcss-animate
- shadcn/ui (button, card, input, textarea, label, checkbox, dialog, sonner)
- Framer Motion 11 para animaciones
- Lucide React para iconos
- Zod para validación
- Turso / libSQL como base de datos
- Tipografías: Fraunces (display) + Geist Sans (body)

## Puesta en marcha local

```bash
pnpm install
cp .env.example .env.local
# editar .env.local con tus credenciales de Turso
pnpm seed       # crea tablas y carga 3 reseñas demo
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Configurar Turso

1. Crear cuenta y base de datos en [turso.tech](https://docs.turso.tech).
2. `turso db create toldos-noa`
3. `turso db show toldos-noa --url` → copiar a `TURSO_DATABASE_URL`.
4. `turso db tokens create toldos-noa` → copiar a `TURSO_AUTH_TOKEN`.
5. `pnpm seed` para crear el esquema y meter las reseñas iniciales.

## Variables de entorno

Ver `.env.example`. En Vercel: Settings → Environment Variables.

| Variable | Descripción |
| --- | --- |
| `TURSO_DATABASE_URL` | URL libsql:// de tu base de datos Turso |
| `TURSO_AUTH_TOKEN` | Token de autenticación |
| `NEXT_PUBLIC_SITE_URL` | Dominio canónico (ej. `https://toldosnoa.es`) |
| `NEXT_PUBLIC_WHATSAPP` | Número en formato sin +, sin espacios (ej. `34681924338`) |
| `NEXT_PUBLIC_PHONE` | Número para `tel:` (ej. `+34681924338`) |

## Despliegue en Vercel

1. Conectar el repo desde el dashboard de Vercel.
2. Añadir las env vars (ver tabla anterior).
3. Deploy.

Si prefieres CLI:

```bash
pnpm dlx vercel --prod
```

## Moderar / aprobar reseñas

Las reseñas enviadas desde `/resenas` quedan con `approved = 0`. Para aprobarlas usa la CLI de Turso:

```bash
turso db shell toldos-noa
> SELECT id, author, body FROM reviews WHERE approved = 0;
> UPDATE reviews SET approved = 1 WHERE id = 4;
```

Las reseñas aprobadas aparecen automáticamente (cache `revalidate = 60s`).

## Cambiar la URL de Google Reviews

Cuando el cliente cree su perfil de Google Business Profile y obtenga el Place ID:

- Editar `lib/constants.ts` → `GOOGLE_REVIEW_URL`.
- Reemplazar `https://g.page/r/REPLACE_WITH_PLACE_ID/review` por la URL real.

## Otros TODO marcados en código

- `lib/constants.ts` → `EMAIL` (placeholder `info@toldosnoa.es`).
- Fotos en `public/fotos/`: actualmente la foto `a-medida.jpg` reutiliza la del hero. Sustituir cuando haya una específica para "A Medida".

## Estructura

```
app/                # Rutas Next.js (App Router)
  api/              # Endpoints REST (reviews, contact)
  contacto/         # /contacto
  resenas/          # /resenas
  servicios/[slug]  # 4 servicios estáticos
components/         # Componentes React (Hero, Sections, Footer, …)
  ui/               # shadcn primitives
lib/                # Constantes, servicios, cliente Turso, utils
public/
  fotos/            # Fotos reales de instalaciones
  logo/             # Logo del cliente
scripts/seed.ts     # Esquema + reseñas iniciales
```
