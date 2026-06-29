import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import { BackLink } from '@/components/BackLink';
import { Footer } from '@/components/Footer';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ReviewForm } from '@/components/ReviewForm';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { REVIEWS_SEED, type Review } from '@/lib/reviews-seed';
import { SITE, GOOGLE_REVIEW_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Reseñas · Lo que dicen nuestros clientes',
  description:
    'Reseñas reales de clientes de Toldos Noa en Madrid y Tarragona. Déjanos la tuya.',
  alternates: { canonical: '/resenas' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Toldos Noa',
    title: 'Reseñas de clientes · Toldos Noa',
    description:
      'Reseñas reales de clientes de Toldos Noa en Madrid y Tarragona. Déjanos la tuya.',
    url: `${SITE.url}/resenas`,
  },
};

export const revalidate = 60;

async function getAllReviews(): Promise<Review[]> {
  try {
    const result = await db.execute(
      'SELECT id, author, location, rating, body, service, created_at FROM reviews WHERE approved = 1 ORDER BY created_at DESC'
    );
    if (result.rows.length === 0) {
      return REVIEWS_SEED.map((r, i) => ({ ...r, id: i + 1 }));
    }
    return result.rows as unknown as Review[];
  } catch {
    return REVIEWS_SEED.map((r, i) => ({ ...r, id: i + 1 }));
  }
}

export default async function ResenasPage() {
  const reviews = await getAllReviews();

  return (
    <>
      <BackLink />

      <section className="container py-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-sun-500">
            Reseñas
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl lg:text-6xl">
            Hablan ellos, no nosotros
          </h1>
          <p className="mt-6 text-lg text-ink-700">
            Aquí encontrarás todas las reseñas que han dejado nuestros clientes. Si trabajaste con
            nosotros, déjanos la tuya — nos ayuda muchísimo.
          </p>

          <div className="mt-8">
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
        </div>
      </section>

      <ReviewsSection reviews={reviews} variant="full" />

      <section className="bg-sand-50 py-24 lg:py-32">
        <div className="container max-w-2xl">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-display text-ink-900 sm:text-4xl">
            Deja tu reseña aquí
          </h2>
          <p className="mt-4 text-base text-ink-700">
            La publicaremos en cuanto la revisemos.
          </p>
          <div className="mt-8">
            <ReviewForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
