import { ChevronDown } from 'lucide-react';

export const HOME_FAQS = [
  {
    q: '¿Cuánto cuesta instalar un toldo en Madrid o Tarragona?',
    a: 'Depende del tamaño, el tipo de toldo y los extras (motorización, sensores, tipo de lona). Como referencia, un toldo extensible de brazos motorizado para una terraza ronda los 800-1.800 €, y un cambio de lona de 4×3 m suele estar entre 350 € y 600 €. La visita técnica y el presupuesto son siempre gratuitos y sin compromiso.',
  },
  {
    q: '¿Qué zonas cubrís?',
    a: 'Trabajamos en toda la Comunidad de Madrid y en la provincia de Tarragona, incluida la Costa Daurada (Reus, Salou, Cambrils, El Vendrell, Torredembarra y alrededores). También valoramos desplazamientos a zonas limítrofes.',
  },
  {
    q: '¿Cuánto se tarda desde el presupuesto hasta la instalación?',
    a: 'Lo habitual son 3 a 5 semanas: visita técnica en pocos días, fabricación a medida en 2-4 semanas y montaje en una mañana. Si tienes urgencia, intentamos adelantar los plazos.',
  },
  {
    q: '¿Reparáis toldos que no instalasteis vosotros?',
    a: 'Sí, reparamos toldos de cualquier marca y antigüedad: cambio de lona, brazos, motores, anclajes y mandos. El diagnóstico es gratuito y solo pagas si decides hacer la reparación.',
  },
  {
    q: '¿Qué garantía tienen los toldos?',
    a: 'Mínimo 3 años en estructura y lona, y 5 años en motorización. La instalación la realiza nuestro propio equipo y volvemos para cualquier ajuste durante el primer año.',
  },
  {
    q: '¿Necesito permiso de la comunidad o del ayuntamiento?',
    a: 'En viviendas, la mayoría de comunidades de vecinos exigen aprobación si el toldo da a fachada. En negocios suele hacer falta licencia municipal para toldos en vía pública. En ambos casos te ayudamos a preparar la documentación.',
  },
];

const faqLdJson = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export function HomeFaqSection() {
  return (
    <section aria-labelledby="faq-heading" className="bg-sand-50 py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLdJson) }}
      />
      <div className="container max-w-3xl">
        <h2
          id="faq-heading"
          className="font-display text-4xl font-medium leading-tight tracking-display text-ink-900 sm:text-5xl"
        >
          Preguntas frecuentes sobre toldos
        </h2>
        <p className="mt-6 text-lg text-ink-700">
          Las dudas que más nos llegan por WhatsApp y teléfono, respondidas de forma clara.
        </p>

        <div className="mt-12 divide-y divide-sand-200 border-y border-sand-200">
          {HOME_FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-lg font-medium tracking-display text-ink-900 sm:text-xl [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-ink-700 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="mt-4 pr-9 text-base leading-relaxed text-ink-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
