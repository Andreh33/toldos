'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const REASONS = [
  'Te explicamos todo de forma clara, sin sorpresas',
  'Cumplimos con los tiempos acordados',
  'Trabajamos con materiales que realmente duran',
  'Cuidamos cada detalle como si fuera nuestro',
  'Estamos disponibles para resolver cualquier duda',
];

export function WhyUsSection() {
  return (
    <section className="bg-sand-50 py-24 lg:py-32">
      <div className="container max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl lg:text-6xl"
        >
          Por qué elegir Toldos Noa
        </motion.h2>

        <ul className="mt-14 space-y-7">
          {REASONS.map((reason, i) => (
            <motion.li
              key={reason}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-start gap-5 border-b border-sand-200 pb-6 text-lg text-ink-900 sm:text-xl"
            >
              <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf-600/10">
                <Check className="h-4 w-4 text-leaf-600" strokeWidth={3} />
              </span>
              <span className="font-display tracking-display">{reason}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
