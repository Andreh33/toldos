import Link from 'next/link';
import { ArrowRight, Check, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BackLink } from '@/components/BackLink';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';
import { SITE, PHONE, WHATSAPP } from '@/lib/constants';
import { ZONES } from '@/lib/zones';
import type { ZoneData } from '@/lib/zone-types';

const BENEFITS = [
  { title: 'Visita técnica gratis', body: 'Vamos, medimos y te asesoramos sin compromiso ni coste.' },
  { title: 'Fabricación e instalación propias', body: 'Sin subcontratas: el mismo equipo mide, fabrica y monta.' },
  { title: 'Materiales que aguantan', body: 'Lonas y estructuras de marcas contrastadas, pensadas para durar.' },
  { title: 'Trato cercano', body: 'Presupuesto claro, plazos realistas y postventa de verdad.' },
];

export function ZoneLanding({ data }: { data: ZoneData }) {
  const url = `${SITE.url}/toldos-en/${data.ciudad}`;

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `Toldos en ${data.city}`,
    serviceType: 'Fabricación, instalación y reparación de toldos',
    description: data.metaDescription,
    areaServed: {
      '@type': 'City',
      name: data.city,
      containedInPlace: { '@type': 'AdministrativeArea', name: data.region },
    },
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${SITE.url}/#localbusiness`,
      name: 'Toldos Noa',
      telephone: PHONE.e164,
      url: SITE.url,
    },
    url,
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: `Toldos en ${data.city}`, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceLd, faqLd, breadcrumbLd]) }}
      />

      <BackLink />

      {/* Hero */}
      <section className="container py-8 lg:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-sand-100 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-ink-700">
            <MapPin className="h-4 w-4 text-sun-500" />
            {data.heroKicker}
          </div>
          <h1 className="mt-6 font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl lg:text-6xl">
            {data.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-ink-700">{data.heroLead}</p>
          <p className="mt-4 text-sm font-medium text-ink-800">
            En temporada alta (junio–septiembre) la agenda de instalación se llena rápido:
            cuanto antes hagamos la visita técnica, antes disfrutas de la sombra.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="whatsapp" size="lg">
              <a href={WHATSAPP.forZone(data.city)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Pedir presupuesto en {data.city}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${PHONE.e164}`}>
                <Phone className="h-5 w-5" />
                Llamar {PHONE.display}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro + beneficios */}
      <section className="bg-sand-100 py-20 lg:py-28">
        <div className="container grid gap-12 lg:grid-cols-[1.3fr,1fr] lg:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-ink-700">
            {data.intro.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'font-display text-2xl font-medium leading-snug tracking-display text-ink-900 sm:text-3xl'
                    : ''
                }
              >
                {p}
              </p>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {BENEFITS.map((b) => (
              <article
                key={b.title}
                className="rounded-2xl border border-sand-200 bg-sand-50 p-6 shadow-card"
              >
                <Check className="h-6 w-6 text-leaf-600" strokeWidth={3} />
                <h3 className="mt-3 font-display text-lg font-medium tracking-display text-ink-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Usos / aplicaciones */}
      <section className="bg-sand-50 py-24 lg:py-32">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-display text-ink-900 sm:text-4xl lg:text-5xl">
            {data.usesHeading}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-700">
            {data.uses.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Zonas cubiertas */}
      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-sun-500">
              Dónde trabajamos
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-display text-ink-900 sm:text-4xl">
              {data.areasHeading}
            </h2>
            <p className="mt-5 text-lg text-ink-700">{data.areasIntro}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {data.areas.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-sand-200 bg-sand-50 px-4 py-2 text-sm text-ink-700"
              >
                <MapPin className="h-3.5 w-3.5 text-sun-500" />
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué nosotros */}
      <section className="bg-ink-900 py-24 text-sand-50 lg:py-32">
        <div className="container max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-sun-400">
            Por qué Toldos Noa
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-display sm:text-4xl lg:text-5xl">
            {data.whyHeading}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-sand-100/90">
            {data.why.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand-50 py-24 lg:py-32">
        <div className="container max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-sun-500">
            Preguntas frecuentes
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-display text-ink-900 sm:text-4xl lg:text-5xl">
            Toldos en {data.city}: dudas habituales
          </h2>
          <div className="mt-12 space-y-6">
            {data.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-sand-200 bg-sand-50 p-6 transition-colors open:border-sun-400/60 open:bg-sand-100/60"
              >
                <summary className="cursor-pointer list-none font-display text-lg font-medium tracking-display text-ink-900 marker:hidden">
                  <div className="flex items-start justify-between gap-4">
                    <span>{f.q}</span>
                    <span
                      aria-hidden
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand-100 text-sun-500 transition-transform group-open:rotate-45 group-open:bg-sun-400 group-open:text-ink-900"
                    >
                      +
                    </span>
                  </div>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-ink-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Relacionados */}
      {data.related.length > 0 && (
        <section className="bg-sand-100 py-20">
          <div className="container">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-sun-500">
              Sigue leyendo
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-sand-200 bg-sand-50 p-5 transition-all hover:border-sun-400 hover:shadow-card"
                >
                  <span className="font-display text-base tracking-display text-ink-900">
                    {r.label}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink-700 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Otras zonas (enlazado lateral entre landings locales) */}
      <section className="bg-sand-50 py-16">
        <div className="container">
          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900 sm:text-3xl">
            También instalamos toldos en
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {ZONES.filter((z) => z.ciudad !== data.ciudad).map((z) => (
              <li key={z.ciudad}>
                <Link
                  href={`/toldos-en/${z.ciudad}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-sand-200 bg-sand-100 px-4 py-2 text-sm text-ink-700 transition-colors hover:border-sun-400 hover:text-ink-900"
                >
                  <MapPin className="h-3.5 w-3.5 text-sun-500" aria-hidden />
                  Toldos en {z.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </>
  );
}
