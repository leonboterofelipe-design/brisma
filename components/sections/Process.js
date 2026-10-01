import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { process } from '@/lib/content';

export default function Process() {
  return (
    <Section id="proceso">
      <SectionHeading title={process.title} text={process.text} />
      <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-0 md:border-t md:border-line">
        {process.steps.map((s, i) => (
          <li key={s.title} className="relative md:pr-8 md:pt-8">
            <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white md:absolute md:-top-4 md:mb-0">{i + 1}</span>
            <h3 className="text-xl">{s.title}</h3>
            <p className="mt-2 text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
      <Button href="#contacto" className="mt-12">Empezar con la consulta</Button>
    </Section>
  );
}
