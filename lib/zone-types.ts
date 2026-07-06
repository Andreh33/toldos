export type ZoneFAQ = { q: string; a: string };

/**
 * Datos de una landing local (una ciudad/zona). Cada ciudad aporta contenido
 * unico para evitar contenido duplicado; el componente ZoneLanding lo pinta.
 */
export type ZoneData = {
  /** Segmento de URL, p.ej. "madrid" -> /toldos-en/madrid */
  ciudad: string;
  /** Nombre para mostrar, p.ej. "Madrid" */
  city: string;
  /** Ambito administrativo, p.ej. "Comunidad de Madrid" */
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  /** Contexto local (2-3 parrafos). El primero se muestra destacado. */
  intro: string[];
  usesHeading: string;
  /** Aplicaciones y casos habituales en la zona (2-3 parrafos). */
  uses: string[];
  areasHeading: string;
  areasIntro: string;
  /** Barrios / municipios cubiertos (chips). */
  areas: string[];
  whyHeading: string;
  /** Por que elegirnos, en clave local (2-3 parrafos). */
  why: string[];
  faqs: ZoneFAQ[];
  /** Enlaces internos a servicios y guías relacionadas. */
  related: { label: string; href: string }[];
};
