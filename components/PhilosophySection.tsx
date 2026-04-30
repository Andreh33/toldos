'use client';

import { motion } from 'framer-motion';

export function PhilosophySection() {
  return (
    <section className="relative bg-sand-50 py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="container relative max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-medium uppercase tracking-[0.28em] text-sun-500"
        >
          Nuestra forma de trabajar
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl lg:text-6xl"
        >
          Sabemos que no se trata solo de poner un toldo
        </motion.h2>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-700 sm:text-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            Se trata de poder usar tu espacio sin preocuparte por el calor, el sol o la lluvia.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            También sabemos que elegir a alguien para hacerlo no es fácil: quieres que quede bien,
            que dure y que no te hagan perder tiempo ni dinero.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 font-display text-2xl font-medium leading-snug tracking-display text-ink-900 sm:text-3xl"
        >
          En Toldos Noa trabajamos precisamente para eso: darte una solución bien hecha y sin
          complicaciones.
        </motion.p>
      </div>
    </section>
  );
}
