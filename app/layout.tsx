import type { Metadata, Viewport } from 'next';
import { Fraunces } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from '@/components/ui/sonner';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { ClickTracker } from '@/components/ClickTracker';
import { SITE, EMAIL, PHONE } from '@/lib/constants';
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
    'Toldos a medida en Madrid y Tarragona: fabricación, instalación y reparación para hogar y negocios. Visita técnica y presupuesto gratis. ☎ 681 924 338',
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
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: 'Toldos Noa',
      inLanguage: 'es-ES',
      publisher: { '@id': `${SITE.url}/#localbusiness` },
    },
    {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${SITE.url}/#localbusiness`,
      name: 'Toldos Noa',
      description:
        'Fabricación, instalación y reparación de toldos a medida para viviendas y negocios en Madrid y Tarragona: toldos cofre, extensibles, verticales, capotas y pérgolas bioclimáticas.',
      telephone: PHONE.e164,
      email: EMAIL,
      url: SITE.url,
      image: `${SITE.url}/fotos/hero.jpg`,
      logo: `${SITE.url}/logo/logo.jpg`,
      priceRange: '€€',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
        { '@type': 'AdministrativeArea', name: 'Provincia de Tarragona' },
        { '@type': 'City', name: 'Madrid' },
        { '@type': 'City', name: 'Tarragona' },
        { '@type': 'City', name: 'Reus' },
        { '@type': 'City', name: 'Salou' },
        { '@type': 'City', name: 'Cambrils' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: PHONE.e164,
        contactType: 'customer service',
        areaServed: 'ES',
        availableLanguage: ['Spanish'],
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '10:00',
          closes: '14:00',
        },
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
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        <main id="contenido">{children}</main>
        <WhatsAppFloat />
        <Toaster />
        <ClickTracker />
        <Analytics />
      </body>
    </html>
  );
}
