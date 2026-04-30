'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE, WHATSAPP } from '@/lib/constants';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-ink-900 lg:min-h-[80vh]"
    >
      <Image
        src="/fotos/hero.jpg"
        alt="Toldo instalado en una terraza al atardecer"
        fill
        priority
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

      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center pt-12 pb-20 text-center lg:min-h-[80vh] lg:items-start lg:pt-24 lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center justify-center rounded-full bg-sand-50/95 px-3 py-2 shadow-card lg:mb-10"
        >
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
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display text-5xl font-medium leading-[1.05] tracking-display text-sand-50 sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          style={{ fontFeatureSettings: '"ss01","ss02"' }}
        >
          Protegemos tu{' '}
          <span className="italic text-sun-400">espacio</span>
          <br className="hidden sm:block" /> como si fuera{' '}
          <span className="italic text-sun-400">nuestro</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="mt-6 max-w-2xl text-base text-sand-100/90 sm:text-lg lg:text-xl"
        >
          ¿El sol o la lluvia no te dejan disfrutar tu terraza, patio o negocio? Nosotros te
          ayudamos a solucionarlo de forma fácil, rápida y sin complicaciones.
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-3 max-w-2xl text-sm text-sand-100/80 sm:text-base"
        >
          Instalamos toldos y lonas a medida en{' '}
          <strong className="font-medium text-sand-50">Madrid y Tarragona</strong>, adaptándonos a
          lo que realmente necesitas.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:justify-start"
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-2 text-sand-100/70">
            <span className="text-[10px] uppercase tracking-[0.3em]">Descubre más</span>
            <span className="h-12 w-px bg-sand-100/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
