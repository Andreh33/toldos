import type { Metadata } from 'next';
import { BackLink } from '@/components/BackLink';
import { Footer } from '@/components/Footer';
import { SITE, EMAIL, PHONE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Aviso legal',
  description:
    'Aviso legal y condiciones de uso del sitio web de Toldos Noa, empresa de fabricación, instalación y reparación de toldos en Madrid y Tarragona.',
  alternates: { canonical: '/aviso-legal' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Toldos Noa',
    title: 'Aviso legal | Toldos Noa',
    url: `${SITE.url}/aviso-legal`,
  },
};

export default function AvisoLegalPage() {
  return (
    <>
      <BackLink />
      <section className="container max-w-3xl py-12 lg:py-16">
        <h1 className="font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl">
          Aviso legal
        </h1>

        <div className="prose-tn mt-10 space-y-6 text-base leading-relaxed text-ink-700">
          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            1. Identificación del titular
          </h2>
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico (LSSI-CE), se informa de que este sitio web,
            accesible en {SITE.url.replace('https://', '')}, es titularidad de{' '}
            <strong className="text-ink-900">Toldos Noa</strong>
            {/* TODO cliente: completar razón social, NIF/CIF y domicilio fiscal */}, empresa
            dedicada a la fabricación, instalación y reparación de toldos y sistemas de protección
            solar en la Comunidad de Madrid y la provincia de Tarragona.
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Teléfono de contacto: {PHONE.display}</li>
            <li>Correo electrónico: {EMAIL}</li>
          </ul>

          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            2. Objeto y condiciones de uso
          </h2>
          <p>
            Este sitio web tiene carácter informativo sobre los servicios que presta Toldos Noa y
            permite solicitar presupuestos y contacto comercial. El acceso y la navegación implican
            la aceptación de este aviso legal. El usuario se compromete a hacer un uso adecuado de
            los contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.
          </p>

          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            3. Propiedad intelectual e industrial
          </h2>
          <p>
            Los contenidos de este sitio (textos, imágenes, logotipos, diseño y código) están
            protegidos por derechos de propiedad intelectual e industrial. Queda prohibida su
            reproducción, distribución o comunicación pública con fines comerciales sin
            autorización expresa del titular.
          </p>

          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            4. Responsabilidad
          </h2>
          <p>
            Toldos Noa no se hace responsable del mal uso que se realice de los contenidos de este
            sitio web ni de los daños derivados de circunstancias ajenas a su control, como fallos
            en la red o intervenciones de terceros. Los precios y plazos orientativos publicados en
            las guías tienen carácter informativo: el presupuesto válido es siempre el emitido por
            escrito tras la visita técnica.
          </p>

          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            5. Legislación aplicable
          </h2>
          <p>
            Este aviso legal se rige por la legislación española. Para cualquier controversia,
            las partes se someterán a los juzgados y tribunales que correspondan conforme a la
            normativa de consumidores y usuarios.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
