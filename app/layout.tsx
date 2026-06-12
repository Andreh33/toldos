import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Fraunces } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from '@/components/ui/sonner';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SITE, EMAIL } from '@/lib/constants';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  axes: ['opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Toldos Noa · Toldos a medida en Madrid y Tarragona',
    template: '%s | Toldos Noa',
  },
  description:
    'Fabricación, instalación y reparación de toldos a medida para viviendas y negocios en Madrid y Tarragona. Toldos cofre, extensibles, verticales y pérgolas. Visita técnica y presupuesto gratis. ☎ 681 924 338',
  keywords: [
    'toldos madrid',
    'toldos tarragona',
    'toldos a medida',
    'instalación de toldos',
    'reparación de toldos',
    'cambio de lona de toldo',
    'toldos cofre',
    'toldos para terrazas',
    'toldos para negocios',
    'pérgolas bioclimáticas',
    'empresa de toldos',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Toldos Noa',
    title: 'Toldos Noa · Toldos a medida en Madrid y Tarragona',
    description:
      'Fabricación e instalación de toldos a medida para viviendas y negocios en Madrid y Tarragona.',
    url: SITE.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toldos Noa · Toldos a medida en Madrid y Tarragona',
    description:
      'Fabricación e instalación de toldos a medida en Madrid y Tarragona.',
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FBF8F3',
  width: 'device-width',
  initialScale: 1,
};

const ldJson = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#localbusiness`,
  name: 'Toldos Noa',
  description:
    'Fabricación, instalación y reparación de toldos a medida para viviendas y negocios en Madrid y Tarragona: toldos cofre, extensibles, verticales, capotas y pérgolas bioclimáticas.',
  telephone: '+34681924338',
  email: EMAIL,
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Provincia de Tarragona' },
    { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
  ],
  knowsAbout: [
    'Instalación de toldos a medida',
    'Reparación de toldos y cambio de lonas',
    'Toldos para hostelería y comercios',
    'Pérgolas bioclimáticas',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Toldos para el hogar',
        url: `${SITE.url}/servicios/hogar`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Toldos para negocios',
        url: `${SITE.url}/servicios/negocios`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Reparación de toldos',
        url: `${SITE.url}/servicios/reparaciones`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Toldos a medida',
        url: `${SITE.url}/servicios/a-medida`,
      },
    },
  ],
  priceRange: '€€',
  image: `${SITE.url}/og.jpg`,
  url: SITE.url,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-sand-50 text-ink-900 antialiased">
        <a href="#contenido" className="skip-link">
          Saltar al contenido principal
        </a>
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        <main id="contenido">{children}</main>
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  );
}
