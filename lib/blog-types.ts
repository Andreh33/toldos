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
  /**
   * Tabla opcional de datos (precios, medidas, comparativas). Se renderiza
   * como <table> real: es el formato que Google extrae para featured
   * snippets y el que citan los asistentes de IA.
   */
  table?: {
    headers: string[];
    rows: string[][];
    /** Nota al pie de la tabla (p.ej. "Rangos orientativos 2026, IVA incluido"). */
    caption?: string;
  };
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
  /**
   * Fecha ISO de la última revisión REAL del contenido. Alimenta el lastmod
   * del sitemap y el dateModified del JSON-LD; solo debe cambiar cuando el
   * texto cambia de verdad (nunca en cada build).
   */
  updated?: string;
  category: string;
  readingMinutes: number;
  keywords: string[];
  sections: PostSection[];
  /** Enlaces internos hacia páginas de conversión. */
  internalLinks?: InternalLink[];
}
