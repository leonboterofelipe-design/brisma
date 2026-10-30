export default function Takeaways({ title = 'En pocas palabras', items }) {
  return (
    <aside aria-label={title} className="card p-6 md:p-8">
      <p className="font-display text-2xl font-semibold text-navy-900">{title}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed text-ink">
            <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
