import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { team } from '@/lib/content';

export default function Team() {
  return (
    <Section id="equipo" tone="paper">
      <SectionHeading title={team.title} />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {team.members.map((m, i) => (
          <figure key={i} className="bg-white">
            {/* Reemplazar por next/image con la foto real en /public/team */}
            <div className="flex aspect-[4/4.5] items-center justify-center bg-navy-800/10 text-sm text-muted">Foto profesional</div>
            <figcaption className="border-t-2 border-accent p-5">
              <p className="font-display text-xl text-navy-900">{m.name}</p>
              <p className="text-sm text-muted">{m.role}</p>
              <p className="mt-3 text-sm italic">“{m.quote}”</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
