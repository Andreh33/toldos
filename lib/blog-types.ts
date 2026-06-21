/**
 * Toldos Noa — Tipos del blog "Consejos" (fuente única de verdad).
 *
 * Los posts viven en lib/posts/*.ts y se ensamblan en lib/blog.ts.
 * Cada post está pensado para posicionamiento orgánico: ataca una búsqueda
 * concreta y enlaza internamente a /servicios, /contacto o la home.
 */

export interface PostSection {
  /** Encabezado H2 de la sección */
  heading: string;
  /** Párrafos de texto plano */
  paragraphs: string[];
  /** Lista opcional de puntos (se renderiza como <ul>) */
  bullets?: string[];
}

export interface InternalLink {
  label: string;
  /** Ruta interna: /servicios/..., /contacto, / */
  href: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Meta description (~150 caracteres) */
  metaDescription: string;
  /** Entradilla que se muestra en la card y al inicio del post */
  excerpt: string;
  /** Fecha ISO de publicación (se usa en JSON-LD y <time>) */
  date: string;
  category: string;
  readingMinutes: number;
  keywords: string[];
  sections: PostSection[];
  /** Enlaces internos hacia páginas de conversión. */
  internalLinks?: InternalLink[];
}
