'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP } from '@/lib/constants';

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 text-sand-50 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="container relative max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl font-medium leading-tight tracking-display sm:text-5xl lg:text-6xl"
        >
          Queremos ayudarte a que disfrutes tu espacio como se merece
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg text-sand-100/80"
        >
          Cuéntanos qué tienes en mente. Te respondemos rápido, sin compromiso y sin tecnicismos
          raros.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
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
            <Link href="/contacto">
              <Mail className="h-5 w-5" />
              Pedir presupuesto online
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
