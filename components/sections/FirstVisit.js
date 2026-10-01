import Image from 'next/image';
import Section from '@/components/ui/Section';
import { hero } from '@/lib/content';

export default function FirstVisit() {
  return (
    <Section tone="paper">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <figure className="relative aspect-[4/3] overflow-hidden bg-navy-900">
          <Image
            src="/hero-legal.jpg"
            alt="Documentos de trabajo sobre una mesa"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </figure>
        <div>
          <p className="text-sm font-semibold text-accent">PRIMERA CONSULTA</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-navy-900 md:text-4xl">Un punto de partida claro</h2>
          <ol className="mt-5 divide-y divide-line border-y border-line">
            {hero.firstVisit.map((item, index) => (
              <li key={item} className="flex gap-4 py-4 text-sm leading-relaxed">
                <span className="font-semibold text-accent">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}