import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { process } from '@/lib/content';

export default function Process() {
  return (
    <Section id="proceso">
      <SectionHeading title={process.title} text={process.text} />
      {/* Móvil: línea de tiempo vertical. Escritorio: tres columnas sobre una línea. */}
      <ol className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3 md:gap-0 md:border-t md:border-line">
        {process.steps.map((s, i) => (
          <li
            key={s.title}
            className="relative pl-16 before:absolute before:bottom-[-2rem] before:left-5 before:top-12 before:w-0.5 before:bg-gold/40 last:before:hidden md:pl-0 md:pr-8 md:pt-10 md:before:hidden"
          >
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-base font-semibold text-white ring-4 ring-white md:-top-5">{i + 1}</span>
            <h3 className="text-2xl leading-tight">{s.title}</h3>
            <p className="mt-2 text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
      <Button href="#contacto" className="mt-12 w-full sm:w-auto">Empezar con la consulta</Button>
    </Section>
  );
}
