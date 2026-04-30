export function MarqueeBand() {
  const items = ['TARRAGONA', 'MADRID', 'TOLDOS A MEDIDA', 'MÁXIMA CONFIANZA'];
  const repeated = Array.from({ length: 4 }).flatMap(() => items);

  return (
    <section
      className="relative overflow-hidden bg-ink-900 py-10 lg:py-14"
      aria-label="Zonas y valores de Toldos Noa"
    >
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-3xl italic text-sand-100/70 sm:text-4xl lg:text-5xl">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span aria-hidden className="text-sun-400/60">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
