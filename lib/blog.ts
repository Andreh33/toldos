/**
 * Toldos Noa — Blog "Consejos" (ensamblaje).
 *
 * Los posts se escriben por lotes en lib/posts/*.ts y se concatenan aquí en
 * POSTS. El listado en /consejos, las páginas de detalle, el sitemap y el
 * JSON-LD se alimentan automáticamente de este array.
 *
 * Para añadir posts: crear/editar un lote en lib/posts/ e importarlo abajo.
 */

import type { BlogPost } from '@/lib/blog-types';
import { posts as tn01 } from '@/lib/posts/tn-01';
import { posts as tn02 } from '@/lib/posts/tn-02';
import { posts as tn03 } from '@/lib/posts/tn-03';
import { posts as tn04 } from '@/lib/posts/tn-04';
import { posts as tn05 } from '@/lib/posts/tn-05';
import { posts as tn06 } from '@/lib/posts/tn-06';
import { posts as tn07 } from '@/lib/posts/tn-07';
import { posts as tn08 } from '@/lib/posts/tn-08';
import { posts as tn09 } from '@/lib/posts/tn-09';
import { posts as tn10 } from '@/lib/posts/tn-10';
import { posts as tn11 } from '@/lib/posts/tn-11';
import { posts as tn12 } from '@/lib/posts/tn-12';
import { posts as tn13 } from '@/lib/posts/tn-13';
import { posts as tn14 } from '@/lib/posts/tn-14';
import { posts as tn15 } from '@/lib/posts/tn-15';
import { posts as tn16 } from '@/lib/posts/tn-16';
import { posts as tn17 } from '@/lib/posts/tn-17';
import { posts as tn18 } from '@/lib/posts/tn-18';
import { posts as tn19 } from '@/lib/posts/tn-19';
import { posts as tn20 } from '@/lib/posts/tn-20';
import { posts as tn21 } from '@/lib/posts/tn-21';
import { posts as tn22 } from '@/lib/posts/tn-22';
import { posts as tn23 } from '@/lib/posts/tn-23';
import { posts as tn24 } from '@/lib/posts/tn-24';
import { posts as tn25 } from '@/lib/posts/tn-25';

export type { BlogPost, PostSection, InternalLink } from '@/lib/blog-types';

export const POSTS: BlogPost[] = [
  ...tn01,
  ...tn02,
  ...tn03,
  ...tn04,
  ...tn05,
  ...tn06,
  ...tn07,
  ...tn08,
  ...tn09,
  ...tn10,
  ...tn11,
  ...tn12,
  ...tn13,
  ...tn14,
  ...tn15,
  ...tn16,
  ...tn17,
  ...tn18,
  ...tn19,
  ...tn20,
  ...tn21,
  ...tn22,
  ...tn23,
  ...tn24,
  ...tn25,
];

/** Categorías en el orden en que deben mostrarse en el listado. */
export const CATEGORY_ORDER = [
  'Tipos de toldos',
  'Guías y precios',
  'Normativa y ayudas',
  'Eficiencia y confort',
  'Toldos por zona',
  'Mantenimiento y reparación',
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Posts ordenados por fecha de publicación descendente. */
export function getPostsSorted(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Posts relacionados en anillo por fecha dentro de la categoría.
 *
 * Antes se devolvían siempre los primeros posts del array: las guías nuevas
 * no recibían ningún enlace entrante desde "Sigue leyendo" y quedaban
 * huérfanas ("Descubierta: sin indexar" en Search Console). Con el anillo,
 * cada guía enlaza a las `limit` siguientes de su categoría ordenadas por
 * fecha (circular), de modo que TODAS reciben el mismo número de enlaces
 * entrantes. Si la categoría es pequeña, se completa con el anillo global.
 */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sorted = getPostsSorted();

  const nextInRing = (list: BlogPost[], count: number): BlogPost[] => {
    const idx = list.findIndex((p) => p.slug === slug);
    if (idx === -1) return [];
    const out: BlogPost[] = [];
    for (let step = 1; step < list.length && out.length < count; step++) {
      out.push(list[(idx + step) % list.length]);
    }
    return out;
  };

  const related = nextInRing(
    sorted.filter((p) => p.category === current.category),
    limit
  );
  if (related.length < limit) {
    const fill = nextInRing(sorted, limit + related.length).filter(
      (p) => !related.some((r) => r.slug === p.slug)
    );
    related.push(...fill.slice(0, limit - related.length));
  }
  return related;
}
