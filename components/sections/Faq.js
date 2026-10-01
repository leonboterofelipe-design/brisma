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
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden className="text-xl text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-prose text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
