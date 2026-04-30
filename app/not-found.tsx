import Link from 'next/link';
import { BackLink } from '@/components/BackLink';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <>
      <BackLink />
      <section className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-sun-500">404</p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-display text-ink-900 sm:text-6xl">
          Esta página no existe
        </h1>
        <p className="mt-4 max-w-md text-ink-700">
          Puede que el enlace esté roto o que la hayamos retirado. Vuelve al inicio y sigue desde
          ahí.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </section>
      <Footer />
    </>
  );
}
