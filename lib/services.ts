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
  /** Título SEO orientado a búsqueda (la plantilla añade "| Toldos Noa"). */
  seoTitle: string;
  /** Meta description con propuesta de valor, CTA y teléfono. */
  metaDescription: string;
  /** Guías de /consejos relacionadas con este servicio (enlazado interno). */
  related: { label: string; href: string }[];
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
    seoTitle: 'Toldos para terraza y hogar a medida',
    metaDescription:
      'Toldos para terraza, balcón, patio y ático en Madrid y Tarragona. Cofre, extensibles y verticales con instalación propia. Presupuesto gratis ☎ 681 924 338.',
    related: [
      { label: 'Cómo elegir el toldo de tu terraza', href: '/consejos/como-elegir-toldo-terraza' },
      { label: 'Toldo cofre: ventajas y precios', href: '/consejos/toldo-cofre' },
      { label: 'Cuánto cuesta un toldo', href: '/consejos/cuanto-cuesta-un-toldo' },
      { label: 'El toldo según la orientación de tu terraza', href: '/consejos/toldo-segun-orientacion' },
    ],
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
      'Un toldo bien elegido baja la temperatura de la estancia varios grados en verano y reduce el gasto de aire acondicionado. En las terrazas orientadas a poniente la diferencia se nota desde el primer día: ganas horas de uso por la tarde sin achicharrarte.',
      'Atendemos viviendas en toda la Comunidad de Madrid y en la provincia de Tarragona, tanto pisos y áticos en ciudad como chalets y casas de campo. Si no sabes por dónde empezar, escríbenos por WhatsApp al 681 924 338 con una foto de tu terraza y te orientamos sin compromiso.',
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
      {
        title: 'Mantenimiento sencillo y telas que duran',
        body: [
          'Las lonas acrílicas teñidas en masa que montamos están pensadas para vivir a la intemperie: el color se mantiene temporada tras temporada y la suciedad se va con agua y un cepillo suave. No hace falta tratarlas con productos especiales ni desmontarlas en invierno si el toldo es de cofre, porque la tela queda recogida y protegida del agua y el polvo.',
          'Para alargar la vida del mecanismo basta con recoger el toldo cuando haya viento fuerte y revisar una vez al año que los brazos extienden con suavidad. Si en algún momento notas un ruido raro o la lona pierde tensión, llámanos antes de que vaya a más: un ajuste a tiempo cuesta mucho menos que una reparación.',
        ],
      },
      {
        title: 'Toldos para hogares de Madrid y Tarragona',
        body: [
          'Conocemos bien el clima de las dos zonas donde trabajamos. En Madrid el reto es el sol intenso y seco de los meses de verano, que castiga las telas de mala calidad; por eso solo montamos lonas que aguantan la radiación sin destenir. En la costa de Tarragona pesan más la humedad, la brisa marina y el viento, así que reforzamos anclajes y recomendamos tratamientos antimoho en las zonas más expuestas.',
          'Tanto si vives en un piso del centro como en un chalet con jardín, vamos a tu domicilio, tomamos medidas y te enseñamos muestras de tela en mano. Pide tu visita técnica gratuita por WhatsApp al 681 924 338 y recibe un presupuesto cerrado, sin compromiso y sin letra pequeña.',
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
      {
        q: '¿Puedo motorizar el toldo más adelante?',
        a: 'Sí. Si ahora prefieres un toldo manual, lo dejamos preparado para que en el futuro puedas añadir motor y mando a distancia sin cambiar la estructura. Es una mejora muy habitual y se hace en una sola visita.',
      },
      {
        q: '¿El toldo protege del agua además del sol?',
        a: 'Las lonas acrílicas repelen una lluvia ligera y te permiten resguardarte de un chubasco puntual, pero no son impermeables al 100 %. Si buscas protección total frente al agua, lo mejor es una pérgola bioclimática o una lona técnica específica: te lo recomendamos según el uso que le vayas a dar.',
      },
    ],
  },
  {
    slug: 'negocios',
    title: 'Para Negocios',
    seoTitle: 'Toldos para negocios y hostelería',
    metaDescription:
      'Toldos para bares, restaurantes y comercios en Madrid y Tarragona: más terraza útil, imagen de marca y montaje sin parar tu actividad. ☎ 681 924 338.',
    related: [
      { label: 'Toldos para hostelería en Madrid', href: '/consejos/toldos-para-hosteleria-madrid' },
      { label: 'Toldos para hostelería en Tarragona', href: '/consejos/toldos-para-hosteleria-tarragona' },
      { label: 'Normativa de toldos en terrazas de hostelería', href: '/consejos/toldos-terrazas-hosteleria-normativa' },
      { label: 'Toldos para comercios en Madrid', href: '/consejos/toldos-para-comercios-madrid' },
    ],
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
      'Un toldo en hostelería se amortiza solo: amplía la terraza útil, alarga la temporada de mesas fuera y convierte un escaparate caluroso en un punto que invita a entrar. Lo que para ti es una inversión, para tu cliente es comodidad — y la comodidad fideliza.',
      'Damos servicio a comercios y locales de toda la Comunidad de Madrid y de la provincia de Tarragona. Cuéntanos qué local tienes y para cuándo lo necesitas por WhatsApp al 681 924 338 y te preparamos una propuesta con presupuesto cerrado y sin compromiso.',
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
      {
        title: 'Instalamos sin parar tu actividad',
        body: [
          'Sabemos que cada hora con la persiana bajada es dinero que no entra. Por eso planificamos el montaje a la medida de tu horario: vamos a primera hora antes de abrir, aprovechamos el día de cierre semanal o trabajamos en domingo si hace falta. Coordinamos materiales y equipo para que la instalación se resuelva del tirón y no tengas el local a medias durante días.',
          'Antes de tocar la fachada repasamos contigo permisos, accesos y posibles afectaciones a vecinos o a la vía pública. Dejamos la zona limpia y revisada, y no nos vamos hasta comprobar que todo abre, cierra y queda bien anclado.',
        ],
      },
      {
        title: 'Toldos para hostelería y comercio en Madrid y Tarragona',
        body: [
          'Trabajamos a diario con bares, restaurantes, cafeterías, tiendas y oficinas de la Comunidad de Madrid y de la provincia de Tarragona. Eso significa que conocemos las ordenanzas de terrazas de muchos ayuntamientos, los colores y formatos que suelen exigir y los plazos reales para tramitar licencias en cada zona.',
          'Si estás montando un local nuevo o renovando la imagen del que ya tienes, podemos entrar desde la fase de proyecto para que el toldo encaje con tu rótulo y tu decoración. Escríbenos por WhatsApp al 681 924 338, mándanos una foto de la fachada y te visitamos para darte un presupuesto cerrado sin compromiso.',
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
      {
        q: '¿Es rentable poner un toldo en la terraza del bar?',
        a: 'En la mayoría de casos sí, y rápido. Una terraza cubierta gana mesas útiles durante más meses al año y resulta mucho más cómoda para el cliente, así que el toldo suele amortizarse en una o dos temporadas. Te ayudamos a dimensionarlo para sacar el máximo partido al espacio disponible.',
      },
      {
        q: '¿Trabajáis con cadenas o varios locales a la vez?',
        a: 'Sí. Si tienes varios establecimientos o una franquicia, unificamos diseño, color corporativo y rotulación en todos ellos y coordinamos las instalaciones para mantener una imagen homogénea. Pídenos una propuesta conjunta por WhatsApp al 681 924 338.',
      },
    ],
  },
  {
    slug: 'reparaciones',
    title: 'Reparaciones',
    seoTitle: 'Reparación de toldos y cambio de lona',
    metaDescription:
      'Reparación de toldos de cualquier marca en Madrid y Tarragona: cambio de lona, brazos, motores y mandos. Diagnóstico honesto y rápido. ☎ 681 924 338.',
    related: [
      { label: 'Cambio de lona de toldo: cuándo y cuánto cuesta', href: '/consejos/cambio-de-lona-toldo' },
      { label: 'Reparar el brazo de un toldo', href: '/consejos/reparar-brazo-toldo' },
      { label: 'Reparar el motor del toldo', href: '/consejos/reparar-motor-toldo' },
      { label: 'Mi toldo no sube ni baja: soluciones', href: '/consejos/toldo-no-sube-ni-baja' },
    ],
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
      'Atendemos toldos de cualquier antigüedad y fabricante, los hayamos instalado nosotros o no. Si el tuyo está descatalogado y ya no se fabrican sus recambios, buscamos piezas compatibles o adaptamos una solución equivalente para que no tengas que tirarlo entero.',
      'Una reparación a tiempo evita males mayores: un brazo que cojea acaba doblándose, una costura abierta termina rasgando toda la lona y un anclaje suelto puede descolgar el toldo. Cuanto antes lo veamos, más barato y sencillo sale el arreglo. Mándanos una foto del problema por WhatsApp al 681 924 338 y te decimos por dónde van los tiros.',
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
      {
        title: 'Cómo trabajamos una reparación',
        body: [
          'Empezamos por un diagnóstico in situ gratuito: vamos a ver el toldo, lo abrimos, comprobamos brazos, motor, tensión de la lona y estado de los anclajes, y te explicamos en lenguaje claro qué le pasa. A partir de ahí te damos opciones con precio cerrado de cada una, para que decidas tú sin presión.',
          'La mayoría de arreglos los resolvemos en una sola visita o en pocos días; solo nos lleva más tiempo cuando hay que pedir una pieza concreta de fábrica, y en ese caso te avisamos del plazo por adelantado. Todas las piezas nuevas van con su garantía de fabricante y la mano de obra la respaldamos durante un año.',
        ],
      },
      {
        title: 'Reparaciones de toldos en Madrid y Tarragona',
        body: [
          'Damos cobertura a toda la Comunidad de Madrid y a la provincia de Tarragona, así que tengas el toldo en un piso, en un local o en una casa con jardín, podemos acercarnos a verlo en pocos días. En urgencias reales —un toldo descolgado que supone un peligro o una lona arrancada por una tormenta— intentamos ir el mismo día.',
          'Antes de plantearte comprar uno nuevo, deja que le echemos un vistazo: muchas veces lo que parece un toldo para tirar se arregla por una fracción del coste. Escríbenos por WhatsApp al 681 924 338 con una foto y te decimos sin compromiso si tiene arreglo y cuánto costaría.',
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
      {
        q: '¿Merece la pena reparar o mejor compro uno nuevo?',
        a: 'En la mayoría de casos reparar sale mucho más a cuenta y deja el toldo como nuevo durante años. Solo recomendamos sustituirlo cuando la estructura está oxidada en varios puntos, la fijación ya no es segura o el modelo es tan antiguo que no hay recambios. Te damos nuestra opinión honesta tras verlo, sin empujarte a comprar.',
      },
      {
        q: '¿Reparáis solo en domicilios o también en negocios?',
        a: 'Ambos. Reparamos toldos de viviendas, comunidades y locales comerciales en Madrid y Tarragona. Para negocios podemos coordinar la visita fuera del horario de apertura para no interrumpir tu actividad.',
      },
    ],
  },
  {
    slug: 'a-medida',
    title: 'A Medida',
    seoTitle: 'Toldos a medida y pérgolas bioclimáticas',
    metaDescription:
      'Proyectos a medida en Madrid y Tarragona: pérgolas bioclimáticas, velas tensadas, correderos y grandes formatos. Visita técnica gratis ☎ 681 924 338.',
    related: [
      { label: 'Pérgolas bioclimáticas: guía completa', href: '/consejos/pergola-bioclimatica' },
      { label: 'Toldos vela: diseño y montaje', href: '/consejos/toldo-vela' },
      { label: 'Toldos correderos para patios', href: '/consejos/toldo-corredero-patio' },
      { label: 'Pérgola o toldo: cuál elegir', href: '/consejos/pergola-vs-toldo' },
    ],
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
      'No hay dos proyectos a medida iguales, y precisamente por eso no partimos de un catálogo cerrado: partimos de tu espacio, de cómo quieres usarlo y del resultado que tienes en la cabeza. A partir de ahí proponemos la estructura, la tela y el mecanismo que mejor resuelven tu caso concreto.',
      'Fabricamos en nuestro propio taller, lo que nos da margen para adaptar medidas, formas y acabados sin las limitaciones de un producto en serie. Trabajamos proyectos singulares en toda la Comunidad de Madrid y en la provincia de Tarragona; cuéntanos tu idea por WhatsApp al 681 924 338 o desde el formulario de contacto y la estudiamos contigo sin compromiso.',
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
      {
        title: 'Materiales técnicos y garantía',
        body: [
          'En proyectos singulares no vale cualquier tela ni cualquier perfil. Trabajamos con lonas técnicas de primeras marcas como Soltis y Serge Ferrari, pensadas para grandes superficies y para soportar tensión, sol intenso y humedad sin deformarse. Las estructuras las fabricamos en aluminio extrusionado o en acero galvanizado cuando la luz a cubrir lo exige, siempre con tornillería inoxidable.',
          'Cada elemento sale con la garantía de su fabricante y nosotros respaldamos la instalación. Antes de entregar hacemos pruebas reales de apertura, cierre y comportamiento frente al viento, y te dejamos un manual de mantenimiento adaptado al proyecto para que sepas exactamente cómo cuidarlo.',
        ],
      },
      {
        title: 'Proyectos a medida en Madrid y Tarragona',
        body: [
          'Llevamos proyectos a medida en toda la Comunidad de Madrid y la provincia de Tarragona, desde áticos y chalets hasta restaurantes, hoteles, comunidades de propietarios y edificios catalogados. Conocemos las exigencias de los cascos históricos y de las normativas locales, y sabemos integrar la solución para que cumpla sin renunciar al diseño.',
          'Si tienes planos, fotos o referencias, mándanoslos por WhatsApp al 681 924 338 o por el formulario de contacto: hacemos una primera valoración y, si el proyecto encaja, concertamos una visita técnica con toma de medidas por láser. El presupuesto siempre es detallado y sin compromiso.',
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
      {
        q: '¿Podéis cubrir un espacio con forma irregular o entre medianeras?',
        a: 'Sí, es justo para lo que servimos. Terrazas trapezoidales, patios entre paredes a distinta altura, huecos estrechos o áticos con peto bajo: levantamos las medidas reales y fabricamos la solución exacta para ese hueco, sin forzar un producto de catálogo que no encaja.',
      },
      {
        q: '¿Antes de fabricar puedo ver cómo va a quedar?',
        a: 'Sí. Para proyectos a medida te entregamos un boceto técnico o un render con la propuesta antes de cortar nada, para que veas el resultado y puedas ajustar lo que quieras sin coste añadido. Solo pasamos a fabricación cuando tienes claro lo que vas a recibir.',
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
