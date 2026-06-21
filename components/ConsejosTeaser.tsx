import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getPostsSorted } from '@/lib/blog';

const dateFormatter = new Intl.DateTimeFormat('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function ConsejosTeaser() {
  const posts = getPostsSorted().slice(0, 3);

  return (
    <section id="consejos" className="container py-20 lg:py-28">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sun-500">
            Consejos y guías
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-display text-ink-900 sm:text-4xl lg:text-5xl">
            Aprende a elegir, cuidar y reparar tu toldo
          </h2>
          <p className="mt-5 text-lg text-ink-700">
            Guías prácticas sobre tipos de toldos, instalación en Madrid y Tarragona y
            mantenimiento. Lo que contamos a nuestros clientes, ahora por escrito.
          </p>
        </div>
        <Link
          href="/consejos"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-sand-200 bg-sand-50 px-5 py-2.5 text-sm font-medium text-ink-800 transition-colors hover:border-sun-400 hover:text-sun-500"
        >
          Ver todos los consejos
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
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
}
