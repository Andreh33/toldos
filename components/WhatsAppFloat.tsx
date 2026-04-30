'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP } from '@/lib/constants';

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP.default}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1.5,
        type: 'spring',
        stiffness: 260,
        damping: 22,
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-whatsapp transition-colors hover:bg-whatsapp-dark sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink-900 px-3 py-1.5 text-xs font-medium text-sand-50 opacity-0 shadow-card transition-opacity duration-300 group-hover:opacity-100 sm:block">
        ¿Hablamos?
      </span>
    </motion.a>
  );
}
