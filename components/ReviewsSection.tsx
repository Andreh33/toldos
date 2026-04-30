'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GOOGLE_REVIEW_URL } from '@/lib/constants';
import type { Review } from '@/lib/reviews-seed';

type Props = {
  reviews: Review[];
  variant?: 'home' | 'full';
};

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex h-full flex-col rounded-2xl bg-sand-50 p-7 shadow-card lg:p-8"
    >
      <Quote
        aria-hidden
        className="absolute -top-3 left-6 h-12 w-12 fill-sand-200 stroke-sand-200"
      />

      <div className="relative flex items-center gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-sun-400 stroke-sun-500"
            strokeWidth={1.5}
          />
        ))}
      </div>

      <p className="relative mt-5 flex-1 font-display text-lg italic leading-relaxed text-ink-900 sm:text-xl">
        {review.body}
      </p>

      <footer className="relative mt-6 border-t border-sand-200 pt-4">
        <p className="text-sm font-medium text-ink-900">{review.author}</p>
        <p className="text-xs text-ink-600">{review.location}</p>
      </footer>
    </motion.article>
  );
}

export function ReviewsSection({ reviews, variant = 'home' }: Props) {
  const isHome = variant === 'home';

  return (
    <section className="bg-sand-100 py-24 lg:py-32">
      <div className="container">
        {isHome && (
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-sun-500">
              Lo que dicen nuestros clientes
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl lg:text-6xl">
              Hablan ellos, no nosotros
            </h2>
          </div>
        )}

        <div
          className={
            isHome
              ? 'mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
              : 'mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
          }
        >
          {reviews.map((r, i) => (
            <ReviewCard key={r.id ?? i} review={r} index={i} />
          ))}
        </div>

        {isHome && (
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/resenas">
                Ver todas las reseñas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-sun-400 bg-sand-50 text-ink-900 hover:bg-sand-50/70"
            >
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                <Star className="h-4 w-4 fill-sun-400 stroke-sun-500" />
                Déjanos tu reseña en Google
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
