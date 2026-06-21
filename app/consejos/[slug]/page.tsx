import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { BackLink } from '@/components/BackLink';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { SITE, PHONE, WHATSAPP } from '@/lib/constants';
import { POSTS, getPostBySlug, getRelatedPosts } from '@/lib/blog';

type Params = { slug: string };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/consejos/${post.slug}` },
    openGraph: {
      title: `${post.title} | Toldos Noa`,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      locale: 'es_ES',
      url: `${SITE.url}/consejos/${post.slug}`,
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export default async function ConsejoPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  const blogPostingLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'es-ES',
    author: { '@type': 'Organization', name: 'Toldos Noa' },
    publisher: {
      '@type': 'Organization',
      name: 'Toldos Noa',
      logo: { '@type': 'ImageObject', url: `${SITE.url}/logo/logo.jpg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/consejos/${post.slug}` },
    keywords: post.keywords.join(', '),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Consejos', item: `${SITE.url}/consejos` },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${SITE.url}/consejos/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([blogPostingLd, breadcrumbLd]) }}
      />

      <BackLink href="/consejos" label="Volver a consejos" />

      {/* Cabecera del artículo */}
      <section className="container pt-4 pb-10 lg:pt-6 lg:pb-14">
        <div className="flex flex-wrap items-center gap-3 text-xs text-ink-600">
          <span className="rounded-full bg-sand-100 px-3 py-1 font-medium uppercase tracking-[0.14em]">
            {post.category}
          </span>
          <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
          <span>· {post.readingMinutes} min de lectura</span>
        </div>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-700">{post.excerpt}</p>
      </section>

      {/* Cuerpo */}
      <article className="container max-w-3xl pb-8">
        {post.sections.map((section) => (
          <section key={section.heading} className="mb-11 last:mb-0">
            <h2 className="font-display text-2xl font-medium tracking-display text-ink-900 sm:text-3xl">
              {section.heading}
            </h2>
            <div className="mt-5 space-y-5 leading-relaxed text-ink-700">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc space-y-2.5 pl-6 marker:text-sun-400">
                  {section.bullets.map((b) => (
                    <li key={b.slice(0, 40)}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        {/* Enlaces internos */}
        {post.internalLinks && post.internalLinks.length > 0 && (
          <aside className="mt-12 rounded-3xl border border-sand-200 bg-sand-50/60 p-7">
            <h2 className="font-display text-xl font-medium tracking-display text-ink-900">
              Enlaces útiles
            </h2>
            <ul className="mt-4 space-y-2">
              {post.internalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-ink-800 transition-colors hover:text-sun-500"
                  >
                    <ArrowRight className="h-4 w-4 text-sun-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* CTA */}
        <aside className="mt-8 rounded-3xl bg-ink-900 p-8 text-sand-50 lg:p-10">
          <h2 className="font-display text-2xl font-medium tracking-display">
            ¿Quieres un toldo a medida o reparar el que tienes?
          </h2>
          <p className="mt-3 max-w-xl text-sand-100/80">
            Cuéntanos qué necesitas y te hacemos visita técnica y presupuesto sin compromiso en
            Madrid y la provincia de Tarragona.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="whatsapp" size="lg">
              <a href={WHATSAPP.default} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Escribir por WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" className="bg-sand-50 text-ink-900 hover:bg-sand-100">
              <a href={`tel:${PHONE.e164}`}>
                <Phone className="h-5 w-5" />
                Llamar {PHONE.display}
              </a>
            </Button>
          </div>
        </aside>
      </article>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="container border-t border-sand-200 py-14 lg:py-16">
          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900 sm:text-3xl">
            Sigue leyendo
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <article
                key={r.slug}
                className="group flex flex-col rounded-3xl border border-sand-200 bg-sand-50/60 p-7 transition-colors hover:border-sun-400"
              >
                <span className="self-start rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-600">
                  {r.category}
                </span>
                <h3 className="mt-4 flex-1 font-display text-lg font-medium leading-snug tracking-display text-ink-900">
                  <Link href={`/consejos/${r.slug}`} className="transition-colors group-hover:text-sun-500">
                    {r.title}
                  </Link>
                </h3>
                <Link
                  href={`/consejos/${r.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-sun-500"
                  aria-label={`Leer: ${r.title}`}
                >
                  Leer artículo
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
