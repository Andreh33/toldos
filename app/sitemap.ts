import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';
import { SERVICES } from '@/lib/services';
import { POSTS } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/consejos`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/contacto`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE.url}/resenas`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];
  const services = SERVICES.map((s) => ({
    url: `${SITE.url}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  const posts = POSTS.map((p) => ({
    url: `${SITE.url}/consejos/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  return [...base, ...services, ...posts];
}
