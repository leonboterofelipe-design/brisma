import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { team } from '@/lib/content';

const initials = (name) => name.split(' ').slice(0, 2).map((w) => w[0]).join('');

export default function Team() {
  return (
    <Section id="equipo">
      <SectionHeading title={team.title} text={team.text} />
      <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3">
        {team.members.map((m) => (
          <figure key={m.name} className="card flex flex-col overflow-hidden">
            <div className="relative aspect-[4/4.5] bg-navy-800/10">
              {m.photo ? (
                <Image src={m.photo} alt={`${m.name}, ${m.role.split(' · ')[0].toLowerCase()} especialista en insolvencia`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-top" />
              ) : (
                <span aria-hidden className="flex h-full items-center justify-center font-display text-6xl text-gold">{initials(m.name)}</span>
              )}
            </div>
            <figcaption className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl leading-tight">{m.name}</h3>
              <p className="mt-2 text-sm font-medium text-gold-ink">{m.role}</p>
              <p className="mt-4 leading-relaxed text-muted">{m.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
