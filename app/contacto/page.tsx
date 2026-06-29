import type { Metadata } from 'next';
import { Suspense } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BackLink } from '@/components/BackLink';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { SITE, EMAIL, PHONE, WHATSAPP, ZONES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contacto · Pide presupuesto sin compromiso',
  description:
    'Pide presupuesto de toldos sin compromiso en Madrid y Tarragona. Escríbenos por WhatsApp al 681 924 338, llámanos o rellena el formulario.',
  alternates: { canonical: '/contacto' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Toldos Noa',
    title: 'Contacto · Toldos Noa en Madrid y Tarragona',
    description:
      'Pide presupuesto de toldos sin compromiso en Madrid y Tarragona. WhatsApp, teléfono o formulario.',
    url: `${SITE.url}/contacto`,
  },
};

export default function ContactoPage() {
  return (
    <>
      <BackLink />
      <section className="container py-12 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-sun-500">
              Contacto
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl lg:text-6xl">
              Cuéntanos qué tienes en mente
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-700">
              Escríbenos por WhatsApp para ir más rápido o rellena el formulario y te llamamos
              nosotros. Sin compromiso, sin tecnicismos raros.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="whatsapp" size="lg">
                <a href={WHATSAPP.default} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${PHONE.e164}`}>
                  <Phone className="h-5 w-5" />
                  Llamar {PHONE.display}
                </a>
              </Button>
            </div>

            <ul className="mt-12 space-y-5 border-t border-sand-200 pt-8 text-sm text-ink-700">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-sun-500" />
                <a href={`tel:${PHONE.e164}`} className="hover:text-sun-500">
                  {PHONE.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-sun-500" />
                <a href={`mailto:${EMAIL}`} className="hover:text-sun-500">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-sun-500" />
                <span>{ZONES.join(' · ')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-sun-500" />
                <span>Lun–Vie 9:00–19:00 · Sáb 10:00–14:00</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-sand-100 p-7 shadow-card lg:p-10">
            <Suspense fallback={<div className="h-96" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
