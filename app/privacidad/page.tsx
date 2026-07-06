import type { Metadata } from 'next';
import { BackLink } from '@/components/BackLink';
import { Footer } from '@/components/Footer';
import { SITE, EMAIL, PHONE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description:
    'Política de privacidad de Toldos Noa: qué datos personales tratamos al pedir presupuesto o dejar una reseña, con qué finalidad y cómo ejercer tus derechos.',
  alternates: { canonical: '/privacidad' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Toldos Noa',
    title: 'Política de privacidad | Toldos Noa',
    url: `${SITE.url}/privacidad`,
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <BackLink />
      <section className="container max-w-3xl py-12 lg:py-16">
        <h1 className="font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl">
          Política de privacidad
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-700">
          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            1. Responsable del tratamiento
          </h2>
          <p>
            El responsable del tratamiento de los datos personales recogidos en este sitio web es{' '}
            <strong className="text-ink-900">Toldos Noa</strong>
            {/* TODO cliente: completar razón social, NIF/CIF y domicilio fiscal */}. Puedes
            contactar en {EMAIL} o en el teléfono {PHONE.display}.
          </p>

          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            2. Qué datos tratamos y para qué
          </h2>
          <p>
            A través del formulario de contacto recogemos nombre, apellidos, correo electrónico,
            teléfono y el mensaje con tu consulta, con la única finalidad de responder a tu
            solicitud de información o presupuesto. A través del formulario de reseñas recogemos
            nombre, localidad y tu valoración, con la finalidad de publicarla en la web una vez
            moderada. Registramos además una huella técnica anonimizada (hash de la dirección IP)
            para prevenir el envío abusivo o automatizado de formularios.
          </p>
          <p>
            Si nos escribes por WhatsApp o nos llamas, el tratamiento de esos datos se rige
            también por las condiciones del proveedor de mensajería correspondiente.
          </p>

          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            3. Legitimación
          </h2>
          <p>
            La base legal del tratamiento es tu consentimiento, que prestas al marcar la casilla
            de aceptación antes de enviar cada formulario, y la aplicación de medidas
            precontractuales a petición tuya (elaboración de presupuestos).
          </p>

          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            4. Conservación y destinatarios
          </h2>
          <p>
            Conservamos los datos el tiempo necesario para atender tu solicitud y las obligaciones
            legales derivadas. No cedemos datos a terceros con fines comerciales. Los datos se
            alojan en proveedores de infraestructura que actúan como encargados del tratamiento
            (alojamiento web y base de datos), con garantías conformes al RGPD.
          </p>

          <h2 className="font-display text-2xl font-medium tracking-display text-ink-900">
            5. Tus derechos
          </h2>
          <p>
            Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión,
            oposición, limitación del tratamiento y portabilidad escribiendo a {EMAIL}. Si
            consideras que el tratamiento no se ajusta a la normativa, puedes presentar una
            reclamación ante la Agencia Española de Protección de Datos (aepd.es).
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
