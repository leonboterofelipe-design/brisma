import Link from 'next/link';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Slider from '@/components/ui/Slider';
import { services } from '@/lib/content';

const linkCls = 'mt-auto inline-block pt-5 text-sm font-semibold text-navy-900 underline decoration-gold underline-offset-4';

export default function Services() {
  const [main, ...others] = services.items;
  return (
    <Section id="servicios" tone="dark">
      <SectionHeading title={services.title} text={services.text} dark />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article className="card p-6 md:col-span-2 md:p-8 lg:row-span-2">
          <p className="eyebrow">Nuestro servicio principal</p>
          <h3 className="mt-2 text-3xl leading-tight">{main.title}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{main.text}</p>
          <ul className="mt-6 space-y-3 border-t border-line pt-5">
            {main.points.map((point) => (
              <li key={point} className="flex gap-3 leading-relaxed text-ink">
                <span aria-hidden className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold-ink">✓</span>{point}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            <a href="#contacto" className="text-sm font-semibold text-navy-900 underline decoration-gold underline-offset-4">Evaluar mi caso</a>
            <Link href={main.href} className="text-sm font-semibold text-navy-900 underline decoration-gold underline-offset-4">Cómo funciona</Link>
          </div>
        </article>

        <Slider label="Otros servicios" grid="md:contents" className="md:contents" dark>
          {others.map((service) => (
            <article key={service.title} className="card flex flex-col p-6">
              <h3 className="text-2xl leading-tight">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{service.text}</p>
              {service.href
                ? <Link href={service.href} className={linkCls}>Saber más</Link>
                : <a href="#contacto" className={linkCls}>Consultar</a>}
            </article>
          ))}
        </Slider>
      </div>
    </Section>
  );
}
