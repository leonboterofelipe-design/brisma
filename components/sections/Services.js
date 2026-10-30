import Link from 'next/link';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { services } from '@/lib/content';

const linkCls = 'mt-5 inline-block text-sm font-semibold text-navy-900 underline decoration-gold underline-offset-4';

export default function Services() {
  const [main, ...others] = services.items;
  return (
    <Section id="servicios" tone="dark">
      <SectionHeading title={services.title} text={services.text} dark />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article className="card p-6 md:col-span-2 md:p-8 lg:row-span-2">
          <h3 className="text-2xl">{main.title}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{main.text}</p>
          <ul className="mt-6 space-y-3 border-t border-line pt-5">
            {main.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-gold" />{point}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-x-6">
            <a href="#contacto" className={`${linkCls} !mt-7`}>Evaluar mi caso</a>
            <Link href={main.href} className={`${linkCls} !mt-7`}>Cómo funciona</Link>
          </div>
        </article>

        {others.map((service) => (
          <article key={service.title} className="card p-6">
            <h3 className="text-xl">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>
            {service.href
              ? <Link href={service.href} className={linkCls}>Saber más</Link>
              : <a href="#contacto" className={linkCls}>Consultar</a>}
          </article>
        ))}
      </div>
    </Section>
  );
}
