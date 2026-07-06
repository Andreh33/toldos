import type { Metadata } from 'next';
import { BackLink } from '@/components/BackLink';
import { Footer } from '@/components/Footer';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Política de cookies',
  description:
    'Política de cookies del sitio web de Toldos Noa: qué cookies utilizamos y cómo gestionarlas.',
  alternates: { canonical: '/cookies' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Toldos Noa',
    title: 'Política de cookies | Toldos Noa',
    url: `${SITE.url}/cookies`,
  },
};

export default function CookiesPage() {
  return (
    <>
      <BackLink />
      <section className="container max-w-3xl py-12 lg:py-16">
        <h1 className="font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl">
          Política de cookies
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-700">
          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            1. Qué son las cookies
          </h2>
          <p>
            Las cookies son pequeños archivos que un sitio web guarda en tu navegador para
            recordar información sobre tu visita. Pueden ser propias o de terceros, y técnicas,
            de preferencia, de análisis o publicitarias.
          </p>

          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            2. Cookies que utiliza este sitio
          </h2>
          <p>
            Este sitio web está diseñado para funcionar <strong className="text-ink-900">sin
            cookies de seguimiento ni publicidad</strong>. Para medir las visitas utilizamos una
            herramienta de analítica agregada y respetuosa con la privacidad (Vercel Analytics)
            que no usa cookies ni identifica a personas concretas. Solo pueden emplearse cookies
            o almacenamiento técnico estrictamente necesarios para el funcionamiento del sitio,
            exentos de consentimiento según el criterio de la AEPD.
          </p>

          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            3. Servicios de terceros
          </h2>
          <p>
            Si haces clic en los enlaces de WhatsApp o en los botones de llamada, pasarás a usar
            aplicaciones de terceros con sus propias políticas de privacidad y cookies, ajenas a
            este sitio.
          </p>

          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            4. Cómo gestionar las cookies en tu navegador
          </h2>
          <p>
            Puedes configurar tu navegador para bloquear o eliminar cookies desde sus ajustes de
            privacidad. Ten en cuenta que bloquear cookies técnicas puede afectar al
            funcionamiento de algunos sitios web.
          </p>

          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            5. Actualizaciones
          </h2>
          <p>
            Esta política puede actualizarse si el sitio incorpora nuevas funcionalidades. Si en
            el futuro se añadieran cookies que requieran consentimiento, se mostrará el aviso
            correspondiente antes de instalarlas.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
