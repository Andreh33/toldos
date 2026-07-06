import { MessageCircle } from 'lucide-react';
import { WHATSAPP } from '@/lib/constants';

/**
 * Botón flotante de WhatsApp para escritorio/tablet. En móvil se oculta
 * porque la MobileCtaBar ya ofrece llamada y WhatsApp fijos abajo.
 * Sin framer-motion: entrada animada con CSS puro (cero JS extra).
 */
export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP.default}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 hidden h-14 w-14 animate-pop-in items-center justify-center rounded-full bg-whatsapp text-white shadow-whatsapp transition-transform hover:scale-105 hover:bg-whatsapp-dark active:scale-95 md:flex"
      style={{ animationDelay: '1.2s' }}
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink-900 px-3 py-1.5 text-xs font-medium text-sand-50 opacity-0 shadow-card transition-opacity duration-300 group-hover:opacity-100">
        ¿Hablamos?
      </span>
    </a>
  );
}
