import Link from 'next/link';

const TOLDO_TYPES = [
  {
    name: 'Toldos cofre',
    desc: 'La lona y los brazos quedan protegidos dentro de un cofre de aluminio cuando el toldo está recogido. Es la opción más duradera para terrazas y balcones muy expuestos al sol o a la lluvia.',
  },
  {
    name: 'Toldos extensibles de brazos invisibles',
    desc: 'El modelo más instalado en viviendas: cubre terrazas y balcones sin postes ni apoyos. Disponible manual o motorizado, con sensor de viento opcional.',
  },
  {
    name: 'Toldos verticales y capotas',
    desc: 'Ideales para ventanas, miradores, galerías y terrazas de bares. Filtran el sol sin oscurecer el interior y protegen del viento lateral.',
  },
  {
    name: 'Pérgolas bioclimáticas y velas tensadas',
    desc: 'Estructuras fijas con lamas orientables o lonas tensadas de diseño. Para jardines, áticos y terrazas de hostelería que se usan todo el año.',
  },
];

const ZONES_MADRID = [
  'Madrid capital',
  'Alcalá de Henares',
  'Getafe',
  'Leganés',
  'Móstoles',
  'Fuenlabrada',
  'Alcorcón',
  'Las Rozas',
  'Pozuelo de Alarcón',
  'Rivas-Vaciamadrid',
];

const ZONES_TARRAGONA = [
  'Tarragona capital',
  'Reus',
  'Salou',
  'Cambrils',
  'El Vendrell',
  'Torredembarra',
  'Valls',
  'Calafell',
  'Vila-seca',
  'Tortosa',
];

export function LocalSeoSection() {
  return (
    <section
      id="toldos-madrid-tarragona"
      aria-labelledby="seo-heading"
      className="bg-sand-100 py-24 lg:py-32"
    >
      <div className="container max-w-4xl">
        <h2
          id="seo-heading"
          className="font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl"
        >
          Tu empresa de toldos en Madrid y Tarragona
        </h2>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-700 sm:text-lg">
          <p>
            En <strong className="font-medium text-ink-900">Toldos Noa</strong> fabricamos e
            instalamos toldos a medida para viviendas, comunidades de vecinos y negocios en la
            Comunidad de Madrid y en toda la provincia de Tarragona. Nos encargamos de todo el
            proceso: visita técnica gratuita, toma de medidas, fabricación con materiales de
            primera calidad e instalación realizada por nuestro propio equipo, sin subcontratas.
          </p>
          <p>
            Trabajamos toldos para{' '}
            <Link href="/servicios/hogar" className="font-medium text-ink-900 underline decoration-sun-400 decoration-2 underline-offset-4 hover:text-ink-700">
              terrazas, balcones, patios y áticos
            </Link>
            , instalaciones para{' '}
            <Link href="/servicios/negocios" className="font-medium text-ink-900 underline decoration-sun-400 decoration-2 underline-offset-4 hover:text-ink-700">
              bares, restaurantes y comercios
            </Link>
            ,{' '}
            <Link href="/servicios/reparaciones" className="font-medium text-ink-900 underline decoration-sun-400 decoration-2 underline-offset-4 hover:text-ink-700">
              reparación de toldos y cambio de lonas
            </Link>{' '}
            de cualquier marca, y{' '}
            <Link href="/servicios/a-medida" className="font-medium text-ink-900 underline decoration-sun-400 decoration-2 underline-offset-4 hover:text-ink-700">
              proyectos a medida
            </Link>{' '}
            para espacios singulares: pérgolas bioclimáticas, cubiertas retráctiles y toldos de
            gran formato.
          </p>
          <p>
            Un toldo bien elegido reduce hasta 10 °C la temperatura interior de la vivienda en
            verano, protege muebles y suelos de la decoloración por el sol y convierte una terraza
            que no se usa en el rincón favorito de la casa. En un negocio de hostelería, una
            terraza bien cubierta puede suponer entre un 30 y un 40 % más de aforo útil durante
            los meses de calor.
          </p>
        </div>

        <h3 className="mt-14 font-display text-2xl font-medium tracking-display text-ink-900 sm:text-3xl">
          Tipos de toldos que instalamos
        </h3>
        <dl className="mt-6 grid gap-6 sm:grid-cols-2">
          {TOLDO_TYPES.map((t) => (
            <div key={t.name} className="rounded-2xl bg-sand-50 p-6 shadow-card">
              <dt className="font-display text-lg font-medium tracking-display text-ink-900">
                {t.name}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-700">{t.desc}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-14 font-display text-2xl font-medium tracking-display text-ink-900 sm:text-3xl">
          Zonas donde instalamos y reparamos toldos
        </h3>
        <p className="mt-4 text-base leading-relaxed text-ink-700 sm:text-lg">
          Damos servicio en toda la Comunidad de Madrid y la provincia de Tarragona, incluida la
          Costa Daurada. Estas son algunas de las localidades donde trabajamos habitualmente:
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.22em] text-ink-700">
              Toldos en Madrid
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {ZONES_MADRID.map((z) => (
                <li
                  key={z}
                  className="rounded-full bg-sand-50 px-4 py-1.5 text-sm text-ink-700 shadow-card"
                >
                  {z}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.22em] text-ink-700">
              Toldos en Tarragona
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {ZONES_TARRAGONA.map((z) => (
                <li
                  key={z}
                  className="rounded-full bg-sand-50 px-4 py-1.5 text-sm text-ink-700 shadow-card"
                >
                  {z}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-ink-700">
          ¿Tu localidad no aparece en la lista? Escríbenos igualmente: cubrimos ambas provincias
          al completo y valoramos desplazamientos a zonas limítrofes.
        </p>
      </div>
    </section>
  );
}
