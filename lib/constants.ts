export const SITE = {
  name: 'Toldos Noa',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://toldosnoa.es',
  tagline: 'Toldos a medida en Madrid y Tarragona',
};

export const PHONE = {
  display: '681 924 338',
  e164: '+34681924338',
  raw: '34681924338',
};

const waBase = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? PHONE.raw}`;

export const WHATSAPP = {
  base: waBase,
  default: `${waBase}?text=${encodeURIComponent(
    'Hola, me gustaría pedir presupuesto para un toldo'
  )}`,
  hogar: `${waBase}?text=${encodeURIComponent('Hola, quiero información para mi hogar')}`,
  negocios: `${waBase}?text=${encodeURIComponent(
    'Hola, tengo un negocio en [Madrid/Tarragona] y quiero presupuesto'
  )}`,
  reparaciones: `${waBase}?text=${encodeURIComponent('Hola, necesito reparar un toldo')}`,
  aMedida: `${waBase}?text=${encodeURIComponent('Hola, quiero un toldo a medida')}`,
};

export const ZONES = ['Tarragona (provincia)', 'Madrid'];

// TODO: reemplazar por la URL real cuando el cliente cree su perfil de Google Business Profile
export const GOOGLE_REVIEW_URL = 'https://g.page/r/REPLACE_WITH_PLACE_ID/review';

// TODO: reemplazar por el email real del cliente
export const EMAIL = 'info@toldosnoa.es';
