import Image from 'next/image';
import { Check, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE, WHATSAPP } from '@/lib/constants';

const TRUST_POINTS = [
  'Visita técnica y presupuesto gratis',
  'Fabricación e instalación propias',
  'Garantía mínima de 3 años',
];

/**
 * Hero de la home. Server component a propósito: el H1 es el elemento LCP en
 * móvil y con framer-motion quedaba oculto (opacity 0) hasta la hidratación,
 * añadiendo ~2 s de render delay. Las animaciones son ahora CSS puro; el H1
 * solo anima transform (no opacity) para pintar visible desde el primer frame.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-ink-900 lg:min-h-[80vh]"
    >
      <Image
        src="/fotos/hero.webp"
        alt="Toldo instalado en una terraza al atardecer"
        fill
        priority
        fetchPriority="high"
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/45 to-ink-900/80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center pt-12 pb-24 text-center lg:min-h-[80vh] lg:items-start lg:pt-24 lg:pb-20 lg:text-left">
        <div className="mb-8 inline-flex animate-fade-down items-center justify-center rounded-full bg-sand-50/95 px-3 py-2 shadow-card lg:mb-10">
          <Image
            src="/logo/logo.jpg"
            alt="Toldos Noa logotipo"
            width={48}
            height={48}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="ml-3 mr-1 font-display text-base text-ink-900 tracking-display">
            Toldos Noa
          </span>
        </div>

        <h1
          className="animate-rise font-display text-4xl font-medium leading-[1.08] tracking-display text-sand-50 sm:text-6xl lg:text-7xl xl:text-[5rem]"
          style={{ fontFeatureSettings: '"ss01","ss02"' }}
        >
          Toldos a medida que protegen tu{' '}
          <span className="italic text-sun-400">espacio</span>
          <br className="hidden sm:block" /> como si fuera{' '}
          <span className="italic text-sun-400">nuestro</span>
        </h1>

        <p
          className="mt-6 max-w-2xl animate-fade-up text-base text-sand-100/90 sm:text-lg lg:text-xl"
          style={{ animationDelay: '0.2s' }}
        >
          ¿El sol o la lluvia no te dejan disfrutar tu terraza, patio o negocio? Nosotros te
          ayudamos a solucionarlo de forma fácil, rápida y sin complicaciones.
        </p>

        <p
          className="mt-3 max-w-2xl animate-fade-up text-sm text-sand-100/80 sm:text-base"
          style={{ animationDelay: '0.35s' }}
        >
          Instalamos toldos y lonas a medida en{' '}
          <strong className="font-medium text-sand-50">Madrid y Tarragona</strong>, adaptándonos a
          lo que realmente necesitas.
        </p>

        <div
          className="mt-10 flex w-full max-w-md animate-fade-up flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:justify-start"
          style={{ animationDelay: '0.5s' }}
        >
          <Button asChild variant="whatsapp" size="lg">
            <a href={WHATSAPP.default} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Escribir por WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-sand-50 text-ink-900 hover:bg-sand-100"
          >
            <a href={`tel:${PHONE.e164}`}>
              <Phone className="h-5 w-5" />
              Llamar ahora
            </a>
          </Button>
        </div>

        <ul
          className="mt-8 flex animate-fade-up flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-sand-100/85 sm:text-sm lg:justify-start"
          style={{ animationDelay: '0.65s' }}
        >
          {TRUST_POINTS.map((t) => (
            <li key={t} className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-sun-400" strokeWidth={3} aria-hidden />
              {t}
            </li>
          ))}
        </ul>

        <div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-fade-in lg:block"
          style={{ animationDelay: '1.1s' }}
          aria-hidden
        >
          <div className="flex flex-col items-center gap-2 text-sand-100/70">
            <span className="text-[10px] uppercase tracking-[0.3em]">Descubre más</span>
            <span className="h-12 w-px bg-sand-100/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
