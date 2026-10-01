import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { services } from '@/lib/content';

export default function Services() {
  const [main, ...others] = services.items;
  return (
    <Section id="servicios" tone="dark">
      <SectionHeading title={services.title} text={services.text} dark />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article className="border-t-2 border-gold bg-white p-6 md:col-span-2 md:p-8 lg:row-span-2">
          <h3 className="font-display text-2xl">{main.title}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{main.text}</p>
          <ul className="mt-6 space-y-3 border-t border-line pt-5">
            {main.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-gold" />{point}
              </li>
            ))}
          </ul>
          <a href="#contacto" className="mt-7 inline-block text-sm font-semibold text-navy-900 underline decoration-gold underline-offset-4">Evaluar mi caso</a>
        </article>

        {others.map((service) => (
          <article key={service.title} className="border-t border-line bg-white p-6">
            <h3 className="font-display text-xl">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>
            <a href="#contacto" className="mt-5 inline-block text-sm font-semibold text-navy-900 underline decoration-gold underline-offset-4">Consultar</a>
          </article>
        ))}
      </div>
    </Section>
  );
}
