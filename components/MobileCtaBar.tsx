import { MessageCircle, Phone } from 'lucide-react';
import { PHONE, WHATSAPP } from '@/lib/constants';

/**
 * Barra fija de contacto para móvil (llamar + WhatsApp), visible en todo el
 * sitio. En servicios locales la mayoría del tráfico es móvil y la decisión
 * se toma en segundos: el objetivo es que el teléfono esté siempre a un toque.
 * En escritorio se oculta (ahí ya está el botón flotante de WhatsApp).
 * Server component sin JS: no penaliza LCP ni TBT.
 */
export function MobileCtaBar() {
  return (
    <nav
      aria-label="Contacto rápido"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-sand-200 bg-sand-50/95 backdrop-blur supports-[backdrop-filter]:bg-sand-50/85 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href={`tel:${PHONE.e164}`}
        className="flex h-14 items-center justify-center gap-2 text-sm font-semibold text-ink-900"
      >
        <Phone className="h-4 w-4 text-sun-500" aria-hidden />
        Llamar {PHONE.display}
      </a>
      <a
        href={WHATSAPP.default}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 items-center justify-center gap-2 bg-whatsapp text-sm font-semibold text-white"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        WhatsApp
      </a>
    </nav>
  );
}
