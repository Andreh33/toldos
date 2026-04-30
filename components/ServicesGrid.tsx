'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import { SERVICES } from '@/lib/services';
import { cn } from '@/lib/utils';

export function ServicesGrid() {
  return (
    <section id="servicios" className="bg-sand-100 py-24 lg:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl lg:text-6xl"
          >
            Cada instalación es un espacio que vuelve a disfrutarse
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg text-ink-700"
          >
            Aquí puedes ver algunos de nuestros trabajos reales en viviendas y negocios. Nos
            adaptamos a cada espacio como si fuera único, porque lo es.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:gap-10 lg:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const isWa = service.cta.variant === 'whatsapp';
            const ctaIcon = isWa ? (
              <MessageCircle className="h-4 w-4" />
            ) : (
              <ArrowUpRight className="h-4 w-4" />
            );

            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-sand-50 shadow-card transition-shadow duration-500 hover:shadow-card-hover"
              >
                <Link
                  href={`/servicios/${service.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`Más información sobre ${service.title}`}
                />

                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={85}
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent"
                  />
                  <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sand-50 text-ink-900 shadow-card">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <h3 className="font-display text-2xl font-medium tracking-display text-ink-900 sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-700">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-ink-700"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600"
                          strokeWidth={3}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.cta.href}
                    target={isWa ? '_blank' : undefined}
                    rel={isWa ? 'noopener noreferrer' : undefined}
                    className={cn(
                      'relative z-20 mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun-400 focus-visible:ring-offset-2',
                      isWa
                        ? 'bg-whatsapp text-white shadow-whatsapp hover:bg-whatsapp-dark'
                        : 'bg-ink-900 text-sand-50 hover:bg-ink-700'
                    )}
                  >
                    {ctaIcon}
                    {service.cta.label}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
