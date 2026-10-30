import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import DataTable from '@/components/ui/DataTable';
import Button from '@/components/ui/Button';
import Slider from '@/components/ui/Slider';
import { law, whatsappUrl } from '@/lib/content';

export default function Law() {
  return (
    <Section id="ley-2445">
      <SectionHeading title={law.title} text={law.text} />
      <a href={law.link.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-semibold text-navy-900 underline decoration-gold underline-offset-4">{law.link.label}<span className="sr-only"> (sitio externo, se abre en una pestaña nueva)</span> <span aria-hidden>↗</span></a>
      <Slider label="Lo que cambia con la Ley 2445" grid="md:grid md:grid-cols-3" className="mt-10">
        {law.items.map((item, i) => (
          <article key={item.title} className="card p-6">
            <span aria-hidden className="font-display text-4xl font-semibold leading-none text-gold">0{i + 1}</span>
            <h3 className="mt-4 text-2xl leading-tight lg:text-xl xl:text-2xl">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted lg:text-sm">{item.text}</p>
          </article>
        ))}
      </Slider>
      <div className="mt-10">
        <DataTable {...law.comparison} />
      </div>
      <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
        <Button href={whatsappUrl()} className="w-full sm:w-auto">Empezar a organizar mis deudas</Button>
        <p className="text-sm text-muted">La conversación es confidencial.</p>
      </div>
    </Section>
  );
}
