import Image from 'next/image';
import Section from '@/components/ui/Section';
import { hero } from '@/lib/content';

export default function FirstVisit() {
  return (
    <Section>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-900">
          <Image
            src="/firma-acuerdo-pago-insolvencia.jpg"
            alt="Persona firmando un acuerdo de pago de sus deudas"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </figure>
        <div>
          <p className="eyebrow">Primera consulta</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">Así es su primera consulta</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">Sin presión y sin letra pequeña. Usted sale con claridad, decida lo que decida.</p>
          <ol className="mt-5 divide-y divide-line border-y border-line">
            {hero.firstVisit.map((item, index) => (
              <li key={item.title} className="flex gap-4 py-4 text-sm leading-relaxed">
                <span className="w-6 shrink-0 font-semibold tabular-nums text-gold-ink">0{index + 1}</span>
                <span><strong className="block font-semibold text-navy-900">{item.title}</strong>{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}