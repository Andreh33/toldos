import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';
import { SERVICES } from '@/lib/services';
import { ZONES } from '@/lib/zones';
import { POSTS } from '@/lib/blog';

/**
 * Sitemap con lastmod REAL y estable por URL.
 *
 * Antes las páginas base, servicios y zonas emitían `new Date()` (fecha del
 * build): cada despliegue "tocaba" todas las URLs y Google acaba ignorando un
 * lastmod que siempre cambia. Ahora cada URL declara la fecha del último
 * cambio real de contenido (campo `updated` en posts/servicios/zonas y mapa
 * manual para las estáticas), de modo que Google puede reprogramar el
 * recrawl solo de lo que de verdad cambió.
 *
 * Con ~90 URLs no compensa segmentar en varios sitemaps: el informe de
 * páginas de Search Console ya da el detalle por URL a este tamaño.
 */

/** Última modificación real de las páginas estáticas (mantener a mano). */
const STATIC_LASTMOD: Record<string, string> = {
  '/': '2026-07-06', // hero SSR + FAQs + enlazado local
  '/contacto': '2026-06-29',
  '/resenas': '2026-07-06',
  '/aviso-legal': '2026-07-06', // páginas legales creadas
  '/privacidad': '2026-07-06',
  '/cookies': '2026-07-06',
};

export default function sitemap(): MetadataRoute.Sitemap {
  // El listado /consejos cambia cuando cambia la guía más reciente.
  const newestPost = POSTS.reduce((max, p) => {
    const d = p.updated ?? p.date;
    return d > max ? d : max;
  }, '2026-05-06');

  const base: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/`,
      lastModified: new Date(STATIC_LASTMOD['/']),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE.url}/consejos`,
      lastModified: new Date(newestPost),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/contacto`,
      lastModified: new Date(STATIC_LASTMOD['/contacto']),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/resenas`,
      lastModified: new Date(STATIC_LASTMOD['/resenas']),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/aviso-legal`,
      lastModified: new Date(STATIC_LASTMOD['/aviso-legal']),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${SITE.url}/privacidad`,
      lastModified: new Date(STATIC_LASTMOD['/privacidad']),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${SITE.url}/cookies`,
      lastModified: new Date(STATIC_LASTMOD['/cookies']),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
  const services = SERVICES.map((s) => ({
    url: `${SITE.url}/servicios/${s.slug}`,
    lastModified: new Date(s.updated),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  const zones = ZONES.map((z) => ({
    url: `${SITE.url}/toldos-en/${z.ciudad}`,
    lastModified: new Date(z.updated),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  const posts = POSTS.map((p) => ({
    url: `${SITE.url}/consejos/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  return [...base, ...services, ...zones, ...posts];
}
