import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, MessageCircle, Phone } from 'lucide-react';
import { BackLink } from '@/components/BackLink';
import { Footer } from '@/components/Footer';
import { ContactCTA } from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';
import { SERVICES, getService } from '@/lib/services';
import { SITE, PHONE, WHATSAPP } from '@/lib/constants';

type Params = { slug: string };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      siteName: 'Toldos Noa',
      title: `${service.seoTitle} | Toldos Noa`,
      description: service.metaDescription,
      url: `${SITE.url}/servicios/${service.slug}`,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicioPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const isWa = service.cta.variant === 'whatsapp';

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.description,
    description: service.intro,
    url: `${SITE.url}/servicios/${service.slug}`,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${SITE.url}/#localbusiness`,
      name: 'Toldos Noa',
      telephone: PHONE.e164,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
      { '@type': 'AdministrativeArea', name: 'Provincia de Tarragona' },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
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
      {
        '@type': 'ListItem',
        position: 2,
        name: service.title,
        item: `${SITE.url}/servicios/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceLd, faqLd, breadcrumbLd]) }}
      />

      <BackLink />

      {/* Hero del servicio */}
      <section className="container py-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,1fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sand-100 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-ink-700">
              <Icon className="h-4 w-4 text-sun-500" />
              {service.title}
            </div>
            <h1 className="mt-6 font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl lg:text-6xl">
              {service.description}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-700">{service.intro}</p>

            <ul className="mt-8 space-y-3">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-base text-ink-700"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-leaf-600"
                    strokeWidth={3}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="whatsapp" size="lg">
                <a
                  href={isWa ? service.cta.href : WHATSAPP.default}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Escribir por WhatsApp
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

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-sand-100 shadow-card">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              quality={85}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Long description */}
      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="container max-w-3xl space-y-6">
          {service.longDescription.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? 'font-display text-2xl font-medium leading-snug tracking-display text-ink-900 sm:text-3xl'
                  : 'text-lg leading-relaxed text-ink-700'
              }
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Secciones narrativas */}
      <section className="bg-sand-50 py-24 lg:py-32">
        <div className="container max-w-4xl space-y-20">
          {service.sections.map((sec, i) => (
            <article key={i} className="grid gap-6 lg:grid-cols-[1fr,2fr] lg:gap-12">
              <h2 className="font-display text-3xl font-medium leading-tight tracking-display text-ink-900 sm:text-4xl">
                {sec.title}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-ink-700">
                {sec.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tipos de producto */}
      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-sun-500">
              Qué fabricamos
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-display text-ink-900 sm:text-4xl lg:text-5xl">
              Soluciones que solemos instalar para este caso
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {service.productTypes.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border border-sand-200 bg-sand-50 p-7 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <h3 className="font-display text-xl font-medium tracking-display text-ink-900">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-sand-50 py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-sun-500">
              Cómo trabajamos
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-display text-ink-900 sm:text-4xl lg:text-5xl">
              De la primera llamada al toldo montado
            </h2>
          </div>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p) => (
              <li
                key={p.step}
                className="relative rounded-2xl bg-sand-100 p-7"
              >
                <span className="font-display text-4xl text-sun-400" aria-hidden>
                  {p.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium tracking-display text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Materiales */}
      <section className="bg-ink-900 py-24 text-sand-50 lg:py-32">
        <div className="container grid gap-12 lg:grid-cols-[1fr,1.4fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-sun-400">
              Materiales y calidades
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-display sm:text-4xl lg:text-5xl">
              Lo que va dentro de cada toldo
            </h2>
            <p className="mt-6 text-base text-sand-100/80">
              Trabajamos solo con marcas con las que llevamos años. Sabemos cómo envejecen, cómo se
              reparan y qué garantía dan en la práctica — no solo en papel.
            </p>
          </div>

          <ul className="space-y-4">
            {service.materials.map((m) => (
              <li
                key={m}
                className="flex items-start gap-4 border-b border-sand-100/15 pb-4 text-base text-sand-100/95"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-sun-400" strokeWidth={3} />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-sand-50 py-24 lg:py-32">
        <div className="container max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-sun-500">
            Preguntas frecuentes
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-display text-ink-900 sm:text-4xl lg:text-5xl">
            Las dudas que más nos hacen
          </h2>

          <dl className="mt-12 space-y-6">
            {service.faqs.map((f) => (
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
                <dd className="mt-4 text-base leading-relaxed text-ink-700">{f.a}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* Guías relacionadas (enlazado interno hacia /consejos) */}
      {service.related.length > 0 && (
        <section className="bg-sand-50 py-16">
          <div className="container">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-sun-500">
              Guías útiles
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-display text-ink-900 sm:text-3xl">
              Antes de decidir, resuelve tus dudas
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.related.map((r) => (
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

      {/* Otros servicios */}
      <section className="bg-sand-100 py-20">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sun-500">
            Otros servicios
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => {
              const ICon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-sand-200 bg-sand-50 p-5 transition-all hover:border-sun-400 hover:shadow-card"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sand-100 text-ink-900">
                      <ICon className="h-4 w-4" />
                    </span>
                    <span className="font-display text-lg tracking-display text-ink-900">
                      {s.title}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-ink-700 transition-transform group-hover:translate-x-0.5" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </>
  );
}
