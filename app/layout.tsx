import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Fraunces } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from '@/components/ui/sonner';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SITE } from '@/lib/constants';
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
    'Fabricación e instalación de toldos a medida para viviendas y negocios en Madrid y Tarragona. Presupuesto sin compromiso. ☎ 681 924 338',
  keywords: [
    'toldos madrid',
    'toldos tarragona',
    'toldos a medida',
    'instalación toldos',
    'reparación toldos',
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
  name: 'Toldos Noa',
  telephone: '+34681924338',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Tarragona' },
    { '@type': 'AdministrativeArea', name: 'Madrid' },
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
