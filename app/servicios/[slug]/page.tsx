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
import { PHONE, WHATSAPP } from '@/lib/constants';

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
    title: `${service.title} · Toldos en Madrid y Tarragona`,
    description: service.description,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: `${service.title} | Toldos Noa`,
      description: service.description,
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

  return (
    <>
      <BackLink />

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

      <section className="bg-sand-50 py-20">
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
