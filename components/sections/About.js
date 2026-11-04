import Image from 'next/image';
import Section from '@/components/ui/Section';
import Slider from '@/components/ui/Slider';
import { about } from '@/lib/content';

// Móvil: foto (recorte 4:5) → texto → tarjetas. Escritorio: foto vertical a la izquierda, texto y tarjetas a la derecha.
export default function About() {
  return (
    <Section tone="paper">
      <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-x-14 lg:gap-y-10">
        <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-900 sm:aspect-[4/3] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:min-h-[36rem]">
          <Image
            src="/equipo-abogados-insolvencia-grupo-brisma.jpg"
            alt="Equipo de abogados de insolvencia de Grupo Brisma trabajando en su oficina"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-[50%_80%] sm:object-[50%_72%] lg:object-[50%_65%]"
          />
        </figure>
        <div className="lg:col-start-2 lg:row-start-1">
          <h2 className="text-3xl md:text-4xl">{about.title}</h2>
          <blockquote className="mt-6 border-l-2 border-gold pl-5 font-display text-2xl leading-snug text-navy-800">{about.quote}</blockquote>
          <p className="mt-6 max-w-lg text-muted">{about.text}</p>
        </div>
        <Slider label="Por qué elegirnos" grid="md:grid md:grid-cols-2 md:gap-6" className="lg:col-start-2 lg:row-start-2">
          {about.values.map(([t, d]) => (
            <article key={t} className="card p-6">
              <h3 className="text-2xl leading-tight lg:text-xl xl:text-2xl">{t}</h3>
              <p className="mt-2 leading-relaxed text-muted lg:text-sm">{d}</p>
            </article>
          ))}
        </Slider>
      </div>
    </Section>
  );
}
