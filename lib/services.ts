import { Home, Store, Wrench, Ruler, type LucideIcon } from 'lucide-react';
import { WHATSAPP } from './constants';

export type ServiceCTA = {
  label: string;
  href: string;
  variant: 'whatsapp' | 'primary';
};

export type Service = {
  slug: 'hogar' | 'negocios' | 'reparaciones' | 'a-medida';
  title: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  description: string;
  bullets: string[];
  cta: ServiceCTA;
  longDescription: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'hogar',
    title: 'Para tu Hogar',
    icon: Home,
    image: '/fotos/hogar.jpg',
    imageAlt: 'Toldo instalado en una terraza residencial',
    description:
      'Convierte tu terraza, patio o jardín en un espacio cómodo todo el año.',
    bullets: ['Más sombra y confort', 'Diseño adaptado a tu espacio', 'Instalación limpia y rápida'],
    cta: { label: 'Cuéntanos qué necesitas', href: WHATSAPP.hogar, variant: 'whatsapp' },
    longDescription: [
      'Trabajamos contigo desde la primera visita: medimos in situ, escuchamos cómo usas tu espacio y te proponemos la solución que mejor encaja.',
      'Toldos extensibles, capotas, pérgolas o lonas fijas. Materiales que aguantan el sol del verano y la lluvia del otoño sin perder color ni firmeza.',
      'La instalación la hacemos nosotros, sin subcontratas. Llegamos puntuales, dejamos limpio y te explicamos cómo se maneja antes de irnos.',
    ],
  },
  {
    slug: 'negocios',
    title: 'Para Negocios',
    icon: Store,
    image: '/fotos/negocios.jpg',
    imageAlt: 'Toldo instalado en la fachada de un negocio',
    description:
      'Sabemos que la comodidad de tus clientes es atraer mejores momentos.',
    bullets: ['Espacios más agradables', 'Mejor imagen profesional', 'Soluciones adaptadas al uso'],
    cta: { label: 'Escribir por WhatsApp', href: WHATSAPP.negocios, variant: 'whatsapp' },
    longDescription: [
      'Bares, restaurantes, comercios y oficinas: cada negocio tiene su ritmo y su estética. Diseñamos toldos que protegen, abrigan y comunican imagen de marca.',
      'Estructuras pensadas para uso intensivo, lonas con tu logo o color corporativo, motorización y sensores opcionales para optimizar el día a día.',
      'Trabajamos con plazos claros y minimizamos las molestias durante la instalación para que no pierdas días de actividad.',
    ],
  },
  {
    slug: 'reparaciones',
    title: 'Reparaciones',
    icon: Wrench,
    image: '/fotos/reparaciones.jpg',
    imageAlt: 'Reparación de un toldo dañado',
    description:
      'Reparamos toldos y cambiamos lonas para que recuperes el ambiente y dejes de tirar de tela rota.',
    bullets: ['Diagnóstico honesto', 'Mejor imagen profesional', 'Soluciones rápidas'],
    cta: { label: 'Escríbenos por WhatsApp', href: WHATSAPP.reparaciones, variant: 'whatsapp' },
    longDescription: [
      'Antes de proponerte cambiar nada, miramos qué tiene arreglo. Brazos, motores, sustitución de lona o ajuste de estructura: te decimos lo que toca.',
      'Si el toldo todavía tira años, te lo decimos. Si no merece la pena, también. Nuestro objetivo es que tomes la decisión con información clara.',
      'Servicio rápido en Madrid y Tarragona, con piezas y lonas listas para casi cualquier marca y modelo.',
    ],
  },
  {
    slug: 'a-medida',
    title: 'A Medida',
    icon: Ruler,
    image: '/fotos/a-medida.jpg',
    imageAlt: 'Toldo a medida instalado en un espacio singular',
    description:
      'Cada espacio tiene sus propias necesidades y formas. Nos adaptamos, personalizamos.',
    bullets: ['Evaluación honesta', 'Soluciones flexibles', 'Acabados elegantes'],
    cta: { label: 'Cuéntanos tu idea', href: '/contacto?servicio=a-medida', variant: 'primary' },
    longDescription: [
      'Espacios irregulares, alturas complicadas, fachadas catalogadas: trabajamos con planos y soluciones diseñadas exclusivamente para tu caso.',
      'Coordinamos con arquitectos o interioristas si tu proyecto lo requiere. Te enseñamos opciones de tela, color, mecanismo y cierre antes de fabricar.',
      'Cada proyecto a medida acaba con una sesión de pruebas y un manual sencillo de mantenimiento.',
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
