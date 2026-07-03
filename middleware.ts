import { NextRequest, NextResponse } from 'next/server';

/** Dominio canónico del sitio en producción. */
const PRIMARY_HOST = 'toldosnoa.com';

/**
 * Redirige cualquier host de producción distinto del dominio principal
 * (toldos-noa.vercel.app, www…) con 308 permanente. Google había indexado
 * el subdominio de despliegue de Vercel y canibalizaba la marca; el
 * canonical solo es una sugerencia, la redirección lo consolida de verdad.
 * Los despliegues de preview (VERCEL_ENV=preview) no se tocan.
 */
export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? '';
  if (process.env.VERCEL_ENV === 'production' && host !== PRIMARY_HOST) {
    const url = new URL(req.url);
    url.protocol = 'https:';
    url.host = PRIMARY_HOST;
    url.port = '';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  // Todo excepto assets estáticos, API y ficheros con extensión.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
