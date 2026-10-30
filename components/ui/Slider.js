// Carrusel nativo (scroll-snap) solo en móvil: muestra ~1.5 tarjetas para invitar a deslizar.
// Desde `md` se convierte en la grilla que indique `grid` (o se integra a la grilla padre con `md:contents`).
export default function Slider({ label, grid = 'md:grid md:grid-cols-2', itemWidth = 'w-[72%]', dark = false, className = '', children }) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <div className={`min-w-0 ${className}`}>
      <div
        role="region"
        aria-label={label}
        tabIndex={0}
        className={`-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-5 pt-1 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:pt-0 [&::-webkit-scrollbar]:hidden ${grid}`}
      >
        {items.map((child, i) => (
          <div key={i} className={`${itemWidth} flex shrink-0 snap-start md:w-auto [&>*]:w-full`}>{child}</div>
        ))}
      </div>
      <p aria-hidden className={`mt-1 flex items-center gap-2 text-sm font-medium md:hidden ${dark ? 'text-white/75' : 'text-muted'}`}>
        Deslice para ver más <span className={dark ? 'text-gold' : 'text-gold-ink'}>→</span>
      </p>
    </div>
  );
}
