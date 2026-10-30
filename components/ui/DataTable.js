// Tabla en escritorio; en móvil cada fila se apila como un bloque para no perder columnas.
// Solo una de las dos versiones está visible (display: none), así que los lectores de pantalla leen una sola.
export default function DataTable({ caption, head, rows }) {
  const labels = head.slice(1);
  return (
    <div className="card">
      {caption && <p className="px-5 pt-5 font-display text-xl font-semibold leading-snug text-navy-900 md:hidden">{caption}</p>}
      <dl className="divide-y divide-line md:hidden">
        {rows.map(([first, ...rest]) => (
          <div key={first} className="px-5 py-4">
            <dt className="font-semibold text-navy-900">{first}</dt>
            {rest.map((cell, i) => (
              <dd key={i} className="mt-2 text-sm">
                <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted">{labels[i]}</span>
                <span className={i === rest.length - 1 && rest.length > 1 ? 'text-navy-900' : 'text-muted'}>{cell}</span>
              </dd>
            ))}
          </div>
        ))}
      </dl>

      <table className="hidden w-full text-left text-sm md:table">
        {caption && <caption className="px-5 pt-5 text-left font-display text-xl font-semibold text-navy-900">{caption}</caption>}
        <thead>
          <tr className="border-b border-gold/30">
            {head.map((h, i) => <th key={i} scope="col" className="px-5 py-4 font-semibold text-navy-900">{h || <span className="sr-only">Tema</span>}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map(([first, ...rest]) => (
            <tr key={first}>
              <th scope="row" className="px-5 py-4 font-semibold text-navy-900">{first}</th>
              {rest.map((cell, i) => <td key={i} className={`px-5 py-4 ${i === rest.length - 1 && rest.length > 1 ? 'text-navy-900' : 'text-muted'}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
