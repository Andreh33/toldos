import { Home, Store, Wrench, Ruler, type LucideIcon } from 'lucide-react';
import { WHATSAPP } from './constants';

export type ServiceCTA = {
  label: string;
  href: string;
  variant: 'whatsapp' | 'primary';
};

export type ServiceSection = {
  title: string;
  body: string[];
};

export type ServiceFAQ = {
  q: string;
  a: string;
};

export type Service = {
  slug: 'hogar' | 'negocios' | 'reparaciones' | 'a-medida';
  title: string;
  intro: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  description: string;
  bullets: string[];
  cta: ServiceCTA;
  longDescription: string[];
  sections: ServiceSection[];
  productTypes: { name: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  materials: string[];
  faqs: ServiceFAQ[];
};

export const SERVICES: Service[] = [
  {
    slug: 'hogar',
    title: 'Para tu Hogar',
    intro:
      'Toldos para terrazas, patios, ventanas y áticos. Instalaciones cuidadas, materiales que aguantan y trato cercano de principio a fin.',
    icon: Home,
    image: '/fotos/hogar.jpg',
    imageAlt: 'Toldo instalado en una terraza residencial',
    description: 'Convierte tu terraza, patio o jardín en un espacio cómodo todo el año.',
    bullets: ['Más sombra y confort', 'Diseño adaptado a tu espacio', 'Instalación limpia y rápida'],
    cta: { label: 'Cuéntanos qué necesitas', href: WHATSAPP.hogar, variant: 'whatsapp' },
    longDescription: [
      'Trabajamos contigo desde la primera visita: medimos in situ, escuchamos cómo usas tu espacio y te proponemos la solución que mejor encaja.',
      'Toldos extensibles, capotas, pérgolas o lonas fijas. Materiales que aguantan el sol del verano y la lluvia del otoño sin perder color ni firmeza.',
      'La instalación la hacemos nosotros, sin subcontratas. Llegamos puntuales, dejamos limpio y te explicamos cómo se maneja antes de irnos.',
    ],
    sections: [
      {
        title: 'Cada vivienda tiene su sol y su gente',
        body: [
          'Una terraza orientada al sur no necesita lo mismo que un balcón en un séptimo piso, ni un patio interior se cubre como un jardín. Por eso no trabajamos con un único modelo: nos paramos a entender cómo usas el espacio, cuántas horas al día le da el sol y qué tiempo hace donde vives.',
          'Si vas a comer fuera en verano necesitas un voladizo amplio y bien ventilado. Si lo que quieres es tapar una galería en invierno, hablaremos de cortinas verticales o de un cerramiento ligero. Y si te toca una comunidad de vecinos exigente, te ayudamos a elegir colores y formas que cumplan la normativa sin renunciar a buen diseño.',
        ],
      },
      {
        title: 'Lo que incluimos siempre',
        body: [
          'Visita técnica gratuita y sin compromiso, presupuesto cerrado por escrito (sin sorpresas en factura), instalación realizada por nuestro propio equipo y manual de uso explicado en mano. Ofrecemos garantía de fabricación y de instalación, y volvemos para cualquier ajuste durante el primer año.',
        ],
      },
    ],
    productTypes: [
      {
        name: 'Toldos cofre',
        desc: 'La lona y el brazo quedan totalmente protegidos dentro de un cofre de aluminio. La opción más duradera para zonas con mucho sol o lluvia.',
      },
      {
        name: 'Toldos extensibles de brazos',
        desc: 'El clásico que cubre terrazas y balcones con elegancia. Manual o motorizado, con sensor de viento opcional.',
      },
      {
        name: 'Capotas y toldos verticales',
        desc: 'Perfectos para ventanas, miradores y galerías. Filtran el sol sin oscurecer la habitación.',
      },
      {
        name: 'Pérgolas bioclimáticas',
        desc: 'Estructura fija con lamas orientables. Disfrutas del jardín haga sol o llueva.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Visita y medición',
        desc: 'Vamos a tu casa, vemos el espacio, te enseñamos muestras de telas y colores. Sin compromiso.',
      },
      {
        step: '02',
        title: 'Presupuesto cerrado',
        desc: 'Te mandamos por escrito qué incluye, plazos y garantías. Lo que firmas es lo que pagas.',
      },
      {
        step: '03',
        title: 'Fabricación a medida',
        desc: 'Cada toldo se fabrica con tus medidas exactas. Plazos típicos de 2 a 4 semanas.',
      },
      {
        step: '04',
        title: 'Instalación y entrega',
        desc: 'Montamos en una mañana, dejamos limpio y te enseñamos cómo manejarlo.',
      },
    ],
    materials: [
      'Lonas acrílicas teñidas en masa (no destiñen al sol)',
      'Estructuras de aluminio lacado con tratamiento anticorrosión',
      'Tornillería de acero inoxidable',
      'Motores Somfy con garantía de 5 años',
      'Sensores de viento y sol opcionales',
    ],
    faqs: [
      {
        q: '¿Cuánto cuesta un toldo para mi terraza?',
        a: 'El precio depende del tamaño, el tipo de toldo y los extras (motor, sensores, color de lona). Como referencia, un toldo extensible de brazos motorizado ronda los 800-1.800 €. Te damos el precio exacto tras la visita técnica gratuita.',
      },
      {
        q: '¿Cuánto se tarda desde que pido presupuesto hasta que está instalado?',
        a: 'Lo habitual son 3 a 5 semanas: visita en pocos días, fabricación a medida en 2-4 semanas y montaje en una mañana. Si tienes urgencia (un evento, una reforma) intentamos adelantarlo.',
      },
      {
        q: '¿Necesito permiso de la comunidad de vecinos?',
        a: 'En la mayoría de comunidades, sí — sobre todo si el toldo da a fachada. Te ayudamos a preparar la documentación (medidas, color, materiales) para que tu junta lo apruebe sin problemas.',
      },
      {
        q: '¿Qué garantía tiene?',
        a: 'Mínimo 3 años en estructura y lona, 5 años en motor. Si algo falla por defecto, lo reparamos o sustituimos sin coste.',
      },
    ],
  },
  {
    slug: 'negocios',
    title: 'Para Negocios',
    intro:
      'Toldos y lonas para hostelería, comercio y oficinas. Imagen profesional, aguante real y plazos que no te paran la actividad.',
    icon: Store,
    image: '/fotos/negocios.jpg',
    imageAlt: 'Toldo instalado en la fachada de un negocio',
    description: 'Sabemos que la comodidad de tus clientes es atraer mejores momentos.',
    bullets: ['Espacios más agradables', 'Mejor imagen profesional', 'Soluciones adaptadas al uso'],
    cta: { label: 'Escribir por WhatsApp', href: WHATSAPP.negocios, variant: 'whatsapp' },
    longDescription: [
      'Bares, restaurantes, comercios y oficinas: cada negocio tiene su ritmo y su estética. Diseñamos toldos que protegen, abrigan y comunican imagen de marca.',
      'Estructuras pensadas para uso intensivo, lonas con tu logo o color corporativo, motorización y sensores opcionales para optimizar el día a día.',
      'Trabajamos con plazos claros y minimizamos las molestias durante la instalación para que no pierdas días de actividad.',
    ],
    sections: [
      {
        title: 'Tu negocio se nota desde la calle',
        body: [
          'Un buen toldo no solo da sombra: comunica orden, cuida a tus clientes y multiplica los metros útiles de tu local. Una terraza bien cubierta puede suponer un 30-40 % más de aforo durante los meses de calor — y muchas veces es la diferencia entre que un cliente entre o pase de largo.',
          'Trabajamos con bares, restaurantes, heladerías, comercios, hoteles, clínicas y oficinas. Sabemos que cada sector tiene reglas distintas: ordenanzas municipales, normativas de hostelería, convenios con las ayuntamientos. Te orientamos en todo eso.',
        ],
      },
      {
        title: 'Pensado para uso intensivo',
        body: [
          'Las estructuras y mecanismos que montamos en negocios no son los mismos que en una vivienda. Reforzamos puntos de anclaje, usamos motores de mayor potencia y elegimos lonas con tratamiento ignífugo y antimoho cuando hace falta. La diferencia se nota a partir del segundo o tercer verano.',
        ],
      },
      {
        title: 'Imagen de marca incluida',
        body: [
          'Imprimimos tu logo, lema o pictogramas directamente sobre la lona, en serigrafía o impresión digital de alta resolución. Trabajamos con tu Pantone o lo igualamos a partir de tu carta gráfica. La rotulación no se cae con la lluvia ni se borra con el sol.',
        ],
      },
    ],
    productTypes: [
      {
        name: 'Toldos de barra cuadrada',
        desc: 'Los más vistos en hostelería: aguantan viento, se enrollan limpiamente y permiten lonas grandes con logos.',
      },
      {
        name: 'Toldos planos motorizados',
        desc: 'Ideales para terrazas grandes con varias mesas. Apertura uniforme y manejo desde un mando o app.',
      },
      {
        name: 'Capotas para escaparates',
        desc: 'Refuerzan la imagen del local y protegen los productos del escaparate del sol directo.',
      },
      {
        name: 'Estructuras fijas con cobertura textil',
        desc: 'Para terrazas permanentes: pérgolas con lona tensada, cerramientos verticales y módulos modulares.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Visita al local',
        desc: 'Medimos, hacemos fotos y revisamos restricciones del ayuntamiento o de la comunidad.',
      },
      {
        step: '02',
        title: 'Propuesta gráfica',
        desc: 'Te mandamos un boceto con la rotulación incluida para que veas cómo va a quedar.',
      },
      {
        step: '03',
        title: 'Fabricación',
        desc: 'Producimos en taller con tus medidas, colores corporativos y logo.',
      },
      {
        step: '04',
        title: 'Instalación fuera de horario',
        desc: 'Si lo necesitas, montamos a primera hora o en domingo para no parar la actividad.',
      },
    ],
    materials: [
      'Lonas acrílicas y poliéster de alta densidad',
      'Lonas ignífugas M2 / B-s2,d0 para hostelería',
      'Aluminio reforzado con anclajes de carga aumentada',
      'Motores con par alto y final de carrera regulable',
      'Impresión digital UV resistente para logos y rotulación',
    ],
    faqs: [
      {
        q: '¿Hacéis instalaciones fuera del horario comercial?',
        a: 'Sí. Si tu negocio no puede cerrar, montamos en horario reducido, primera hora de la mañana, noches o domingos. Lo coordinamos contigo para que no pierdas servicio.',
      },
      {
        q: '¿Qué documentación necesito del ayuntamiento?',
        a: 'En la mayoría de municipios necesitas licencia de instalación de toldo en vía pública. Te decimos exactamente qué papeles preparar y, si hace falta, te recomendamos un gestor.',
      },
      {
        q: '¿Podéis poner mi logo en la lona?',
        a: 'Sí, en serigrafía o impresión digital. Trabajamos con tus archivos vectoriales o, si no los tienes, los reconstruimos a partir de tu carta gráfica.',
      },
      {
        q: '¿Tenéis contratos de mantenimiento?',
        a: 'Sí. Para hostelería ofrecemos revisiones anuales o semestrales con limpieza de lona, engrase de mecanismos y revisión de anclajes. Suele incluir descuentos en piezas.',
      },
    ],
  },
  {
    slug: 'reparaciones',
    title: 'Reparaciones',
    intro:
      'Reparamos lo que tiene arreglo. Cambios de lona, brazos, motores y ajustes de estructura — sin venderte un toldo nuevo si no hace falta.',
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
    sections: [
      {
        title: 'Reparar suele costar la mitad — y es lo correcto',
        body: [
          'En 7 de cada 10 visitas, cambiar la lona o reponer un brazo deja el toldo como nuevo durante años más. Sustituirlo entero solo tiene sentido si la estructura está oxidada en varios puntos, si la fijación al muro ya no es segura o si el modelo es tan antiguo que no se encuentran recambios.',
          'Cuando vamos a verlo, te explicamos qué está pasando, qué opciones hay y cuánto cuesta cada una. Sin presión y sin venderte humo. Si lo más razonable es una reparación de 200 €, te lo decimos aunque podríamos cobrarte 1.500 € por uno nuevo.',
        ],
      },
      {
        title: 'Lo que reparamos más a menudo',
        body: [
          'Lonas rotas, descosidas o desteñidas. Brazos que no extienden bien o que se han doblado por viento. Motores que no responden o se han estropeado. Soportes de pared sueltos. Cofres que no cierran. Mandos a distancia perdidos o sin batería. Y los típicos ruidos extraños que terminan rompiendo algo si no se atienden.',
        ],
      },
    ],
    productTypes: [
      {
        name: 'Cambio de lona',
        desc: 'Sustitución completa con tela nueva (mismo color o renovado), incluye desmontaje y montaje en el día.',
      },
      {
        name: 'Reparación de brazos',
        desc: 'Sustitución de muelles, cintas, cabezales o brazo entero. Compatibles con la mayoría de marcas.',
      },
      {
        name: 'Motorización y sustitución de motor',
        desc: 'Convertimos toldos manuales en motorizados o cambiamos el motor existente por uno nuevo con garantía.',
      },
      {
        name: 'Refuerzo de anclajes',
        desc: 'Revisamos los puntos de fijación al muro o techo y los reforzamos para que el toldo aguante años más.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Diagnóstico in situ',
        desc: 'Vamos a ver el toldo, lo desmontamos parcialmente si hace falta y te decimos qué tiene.',
      },
      {
        step: '02',
        title: 'Presupuesto cerrado',
        desc: 'Te damos opciones (reparar, cambiar parcialmente o sustituir) con precio claro de cada una.',
      },
      {
        step: '03',
        title: 'Reparación rápida',
        desc: 'La mayoría de reparaciones se completan en 2-7 días. Si hay que pedir piezas, te avisamos.',
      },
      {
        step: '04',
        title: 'Garantía de la reparación',
        desc: 'La pieza nueva va con su garantía de fabricante y la mano de obra la garantizamos 1 año.',
      },
    ],
    materials: [
      'Lonas de repuesto en stock para cambios urgentes',
      'Brazos compatibles con marcas Bat, Roll-Tec, Para, Zurfluh-Feller',
      'Motores Somfy y Cherubini de sustitución',
      'Soportes y herrajes reforzados',
      'Mandos universales y app smart-home opcional',
    ],
    faqs: [
      {
        q: '¿En cuánto tiempo podéis venir a verlo?',
        a: 'Normalmente en 48-72 horas. Para urgencias (un toldo descolgado o un peligro real) intentamos ir el mismo día.',
      },
      {
        q: '¿Cobráis por el diagnóstico?',
        a: 'No. La visita y el presupuesto son gratuitos. Solo cobras si decides hacer la reparación.',
      },
      {
        q: '¿Reparáis toldos que no instalasteis vosotros?',
        a: 'Sí, da igual la marca o el año. Trabajamos con piezas compatibles y, si el modelo está descatalogado, te buscamos alternativa equivalente.',
      },
      {
        q: '¿Cuánto cuesta cambiar la lona?',
        a: 'Depende del tamaño y la calidad de la tela. Como referencia, una lona de 4×3 m con cambio incluido suele estar entre 350 € y 600 €. Te damos el precio exacto tras ver el toldo.',
      },
    ],
  },
  {
    slug: 'a-medida',
    title: 'A Medida',
    intro:
      'Espacios complicados, formas irregulares, proyectos singulares. Diseñamos toldos y cubiertas a medida cuando lo estándar no encaja.',
    icon: Ruler,
    image: '/fotos/a-medida.jpg',
    imageAlt: 'Toldo a medida instalado en un espacio singular',
    description: 'Cada espacio tiene sus propias necesidades y formas. Nos adaptamos, personalizamos.',
    bullets: ['Evaluación honesta', 'Soluciones flexibles', 'Acabados elegantes'],
    cta: { label: 'Cuéntanos tu idea', href: '/contacto?servicio=a-medida', variant: 'primary' },
    longDescription: [
      'Espacios irregulares, alturas complicadas, fachadas catalogadas: trabajamos con planos y soluciones diseñadas exclusivamente para tu caso.',
      'Coordinamos con arquitectos o interioristas si tu proyecto lo requiere. Te enseñamos opciones de tela, color, mecanismo y cierre antes de fabricar.',
      'Cada proyecto a medida acaba con una sesión de pruebas y un manual sencillo de mantenimiento.',
    ],
    sections: [
      {
        title: 'Cuando lo estándar no llega',
        body: [
          'Hay espacios donde un toldo de catálogo simplemente no entra: terrazas con formas trapezoidales, áticos con peto bajo, patios interiores entre medianeras a alturas distintas, fachadas catalogadas que exigen un color o forma muy concreta. Para todo eso fabricamos a medida en nuestro propio taller.',
          'Trabajamos con planos del cliente o levantamos los nuestros. Si tu proyecto está coordinado por un arquitecto o un interiorista, nos integramos con su pliego: respetamos paletas, alineaciones y materiales sin perder funcionalidad.',
        ],
      },
      {
        title: 'Diseño antes de fabricar',
        body: [
          'Antes de cortar nada, te enseñamos un render o boceto técnico con la solución propuesta. Si vas a invertir varios miles de euros en un proyecto singular, necesitas ver cómo va a quedar — y poder cambiar lo que no te encaje sin que cueste más.',
          'Ofrecemos opciones de tela (mate, satinada, microperforada, ignífuga), de mecanismo (manual, motorizado, automatizado con sensores) y de remate (perfilería pintada en RAL personalizado, plenas o cortinas integradas).',
        ],
      },
      {
        title: 'Proyectos que solemos hacer a medida',
        body: [
          'Cubiertas de patios interiores con módulos retráctiles. Pérgolas bioclimáticas integradas en arquitectura existente. Toldos de gran formato para terrazas de áticos. Cerramientos textiles para piscinas. Soluciones técnicas para edificios catalogados donde no se permite obra fija.',
        ],
      },
    ],
    productTypes: [
      {
        name: 'Pérgolas bioclimáticas a medida',
        desc: 'Lamas orientables o motorizadas, dimensiones libres, cerramientos opcionales.',
      },
      {
        name: 'Cubiertas retráctiles',
        desc: 'Módulos que se abren y cierran sobre raíl. Para patios, pasos cubiertos o piscinas.',
      },
      {
        name: 'Toldos de gran formato',
        desc: 'Soluciones para superficies por encima de los 6 m, con refuerzos calculados.',
      },
      {
        name: 'Velas tensadas',
        desc: 'Triangulares, cuadradas o trapezoidales. Combinables, para cubrir áreas exteriores con diseño.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Reunión inicial',
        desc: 'Revisamos planos, fotos y referencias. Entendemos el resultado que buscas.',
      },
      {
        step: '02',
        title: 'Toma de medidas y boceto',
        desc: 'Vamos al espacio, medimos con láser y te entregamos un boceto con la propuesta.',
      },
      {
        step: '03',
        title: 'Cálculo y fabricación',
        desc: 'Calculamos cargas, validamos materiales y producimos en taller. Plazos de 4-8 semanas.',
      },
      {
        step: '04',
        title: 'Instalación y pruebas',
        desc: 'Montamos sobre obra terminada, hacemos pruebas reales y entregamos manual técnico.',
      },
    ],
    materials: [
      'Lonas técnicas Soltis, Sergé Ferrari y Serge Ferrari Précontraint',
      'Aluminio extrusionado pintado en RAL personalizado',
      'Acero galvanizado para estructuras de gran luz',
      'Motorización con domótica integrable (KNX, Somfy IO, app)',
      'Sensores meteorológicos (sol, viento, lluvia)',
    ],
    faqs: [
      {
        q: '¿Trabajáis con arquitectos e interioristas?',
        a: 'Sí, habitualmente. Nos integramos en proyectos coordinados, respetamos paletas y materiales y entregamos planos técnicos compatibles con su documentación.',
      },
      {
        q: '¿Cuánto se tarda en un proyecto a medida?',
        a: 'Desde la reunión inicial hasta la instalación, normalmente 6-10 semanas. La fase de fabricación suele llevar 4-8 semanas según complejidad y materiales.',
      },
      {
        q: '¿Hacéis cálculo estructural?',
        a: 'Sí. Para proyectos grandes calculamos cargas de viento y nieve según CTE, y entregamos memoria técnica firmada si la administración lo exige.',
      },
      {
        q: '¿Hay un presupuesto mínimo?',
        a: 'No fijamos mínimo, pero los proyectos a medida suelen partir de 3.000-4.000 € por la complejidad de diseño y fabricación específica.',
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
