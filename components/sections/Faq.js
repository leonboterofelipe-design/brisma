import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { faq } from '@/lib/content';

export default function Faq() {
  return (
    <Section id="preguntas" tone="paper">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading title="Preguntas frecuentes" text="Lo que más nos preguntan antes de la primera consulta." />
        <div className="divide-y divide-line border-y border-line">
          {faq.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex min-h-[3.5rem] cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold text-xl leading-none text-gold-ink transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-prose pb-5 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
