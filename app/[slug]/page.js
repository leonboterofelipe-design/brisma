import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Takeaways from '@/components/ui/Takeaways';
import DataTable from '@/components/ui/DataTable';
import ShareButton from '@/components/ui/ShareButton';
import JsonLd from '@/components/seo/JsonLd';
import { guides, getGuide } from '@/lib/guides';
import { faqPage, breadcrumb } from '@/lib/schema';
import { whatsappUrl } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const g = getGuide(params.slug);
  if (!g) return {};
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    alternates: { canonical: `/${g.slug}` },
    openGraph: { type: 'article', title: g.metaTitle, description: g.metaDescription, url: `/${g.slug}` },
  };
}

const linkCls = 'font-semibold text-navy-900 underline decoration-gold underline-offset-4';

function Block({ section }) {
  const ListTag = section.ordered ? 'ol' : 'ul';
  return (
    <section className="mt-14">
      <h2 className="text-3xl leading-tight md:text-4xl">{section.h2}</h2>
      {section.paragraphs?.map((p) => <p key={p} className="mt-4 leading-relaxed text-ink">{p}</p>)}
      {section.list && (
        <ListTag className={`mt-4 space-y-2 pl-5 leading-relaxed marker:text-gold ${section.ordered ? 'list-decimal marker:font-semibold' : 'list-disc'}`}>
          {section.list.map((item) => <li key={item}>{item}</li>)}
        </ListTag>
      )}
      {section.table && <div className="mt-6"><DataTable {...section.table} /></div>}
      {section.subsections?.map((s) => (
        <div key={s.h3} className="mt-8">
          <h3 className="text-2xl">{s.h3}</h3>
          <p className="mt-2 leading-relaxed text-ink">{s.text}</p>
          {s.href && <Link href={s.href} className={`mt-2 inline-block text-sm ${linkCls}`}>{s.linkLabel}</Link>}
        </div>
      ))}
    </section>
  );
}

export default function GuidePage({ params }) {
  const g = getGuide(params.slug);
  if (!g) notFound();
  const related = g.related.map(getGuide);

  return (
    <article className="bg-paper py-12 md:py-20">
      <JsonLd data={faqPage(g.faq)} />
      <JsonLd data={breadcrumb([{ name: 'Inicio', path: '/' }, { name: g.label, path: `/${g.slug}` }])} />
      <Container>
        <div className="mx-auto max-w-3xl">
        <nav aria-label="Ruta de navegación" className="text-sm text-muted">
          <Link href="/" className="hover:text-navy-900">Inicio</Link> <span aria-hidden>/</span> <span aria-current="page">{g.label}</span>
        </nav>

        <h1 className="mt-6 text-4xl leading-[1.08] md:text-5xl">{g.h1}</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink">{g.intro}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button href={whatsappUrl()}>Quiero saber si mi caso aplica</Button>
          <ShareButton title={g.h1} />
        </div>

        <div className="mt-10"><Takeaways items={g.takeaways} /></div>

        {g.sections.map((s) => <Block key={s.h2} section={s} />)}

        <section className="mt-14">
          <h2 className="text-3xl leading-tight md:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-4 divide-y divide-line border-y border-line">
            {g.faq.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex min-h-[3.5rem] cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold text-xl leading-none text-gold-ink transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-prose pb-5 leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <aside className="card mt-14 p-6 text-center md:p-10">
          <p className="font-display text-3xl font-semibold text-navy-900">¿Hablamos de su caso?</p>
          <p className="mx-auto mt-3 max-w-md text-muted">Hablamos de su situación con absoluta reserva. Le decimos con honestidad si la ley aplica para usted.</p>
          <Button href={whatsappUrl()} className="mt-6">Agendar mi consulta</Button>
        </aside>

        <nav aria-label="Guías relacionadas" className="mt-14">
          <p className="font-display text-2xl font-semibold text-navy-900">Siga leyendo</p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/${r.slug}`} className="card block h-full p-5 transition-transform hover:-translate-y-0.5">
                  <span className="font-semibold text-navy-900">{r.h1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        </div>
      </Container>
    </article>
  );
}
