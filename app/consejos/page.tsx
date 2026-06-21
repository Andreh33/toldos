import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BackLink } from '@/components/BackLink';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { SITE } from '@/lib/constants';
import { CATEGORY_ORDER, getPostsSorted } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Consejos y guías sobre toldos',
  description:
    'Guías sobre tipos de toldos, instalación en Madrid y Tarragona y mantenimiento y reparación. Consejos prácticos de Toldos Noa para elegir, cuidar y reparar tu toldo.',
  keywords: [
    'consejos toldos',
    'tipos de toldos',
    'mantenimiento de toldos',
    'reparación de toldos',
    'toldos Madrid',
    'toldos Tarragona',
  ],
  alternates: { canonical: '/consejos' },
  openGraph: {
    title: 'Consejos y guías sobre toldos | Toldos Noa',
    description:
      'Tipos de toldos, instalación en Madrid y Tarragona, mantenimiento y reparación. Guías prácticas de Toldos Noa.',
    type: 'website',
    url: `${SITE.url}/consejos`,
  },
};

const dateFormatter = new Intl.DateTimeFormat('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export default function ConsejosPage() {
  const posts = getPostsSorted();
  const categories = CATEGORY_ORDER.filter((c) => posts.some((p) => p.category === c));

  return (
    <>
      <BackLink href="/" label="Volver al inicio" />

      {/* Hero */}
      <section className="container pt-6 pb-12 lg:pt-10 lg:pb-16">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-sun-500">
          Consejos
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl lg:text-6xl">
          Guías sobre toldos: tipos, instalación y mantenimiento
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-700">
          Todo lo que nos preguntan antes y después de instalar un toldo, contado en claro.
          Qué toldo elegir según tu terraza o negocio, cómo cuidarlo para que dure y qué hacer
          cuando algo falla. Si tras leer sigues con dudas, te hacemos visita técnica y
          presupuesto sin compromiso en Madrid y Tarragona.
        </p>
      </section>

      {/* Listado por categoría */}
      {categories.map((category) => {
        const items = posts.filter((p) => p.category === category);
        return (
          <section key={category} className="container border-t border-sand-200 py-12 lg:py-16">
            <h2 className="font-display text-2xl font-medium tracking-display text-ink-900 sm:text-3xl">
              {category}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-3xl border border-sand-200 bg-sand-50/60 p-7 transition-colors hover:border-sun-400"
                >
                  <div className="flex items-center gap-3 text-xs text-ink-600">
                    <span className="rounded-full bg-white px-3 py-1 font-medium uppercase tracking-[0.14em]">
                      {post.category}
                    </span>
                    <span>{post.readingMinutes} min</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-medium leading-snug tracking-display text-ink-900">
                    <Link href={`/consejos/${post.slug}`} className="transition-colors group-hover:text-sun-500">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-ink-700">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-ink-600">
                    <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
                    <Link
                      href={`/consejos/${post.slug}`}
                      className="inline-flex items-center gap-1 font-medium text-sun-500"
                      aria-label={`Leer: ${post.title}`}
                    >
                      Leer
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <ContactCTA />
      <Footer />
    </>
  );
}
