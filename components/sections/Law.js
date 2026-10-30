import Link from 'next/link';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import DataTable from '@/components/ui/DataTable';
import Button from '@/components/ui/Button';
import { law } from '@/lib/content';

export default function Law() {
  return (
    <Section id="ley-2445">
      <SectionHeading title={law.title} text={law.text} />
      <Link href={law.link.href} className="mt-5 inline-block text-sm font-semibold text-navy-900 underline decoration-gold underline-offset-4">{law.link.label}</Link>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {law.items.map((item) => (
          <article key={item.title} className="card p-6">
            <h3 className="text-xl leading-tight lg:text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <DataTable {...law.comparison} />
      </div>
      <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
        <Button href="#contacto">Empezar a organizar mis deudas</Button>
        <p className="text-sm text-muted">La primera conversación es confidencial.</p>
      </div>
    </Section>
  );
}
