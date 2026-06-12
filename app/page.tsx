import { Hero } from '@/components/Hero';
import { PhilosophySection } from '@/components/PhilosophySection';
import { MarqueeBand } from '@/components/MarqueeBand';
import { ServicesGrid } from '@/components/ServicesGrid';
import { WhyUsSection } from '@/components/WhyUsSection';
import { LocalSeoSection } from '@/components/LocalSeoSection';
import { HomeFaqSection } from '@/components/HomeFaqSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { db } from '@/lib/db';
import { REVIEWS_SEED, type Review } from '@/lib/reviews-seed';

export const revalidate = 60;

async function getApprovedReviews(limit: number): Promise<Review[]> {
  try {
    const result = await db.execute({
      sql: 'SELECT id, author, location, rating, body, service, created_at FROM reviews WHERE approved = 1 ORDER BY created_at DESC LIMIT ?',
      args: [limit],
    });
    if (result.rows.length === 0) {
      return REVIEWS_SEED.slice(0, limit).map((r, i) => ({ ...r, id: i + 1 }));
    }
    return result.rows as unknown as Review[];
  } catch {
    return REVIEWS_SEED.slice(0, limit).map((r, i) => ({ ...r, id: i + 1 }));
  }
}

export default async function HomePage() {
  const reviews = await getApprovedReviews(3);

  return (
    <>
      <Hero />
      <PhilosophySection />
      <MarqueeBand />
      <ServicesGrid />
      <WhyUsSection />
      <LocalSeoSection />
      <ReviewsSection reviews={reviews} variant="home" />
      <HomeFaqSection />
      <ContactCTA />
      <Footer />
    </>
  );
}
