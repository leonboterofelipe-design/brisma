import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { situations } from '@/lib/content';

export default function Situations() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading title={situations.title} text={situations.text} />
          <p className="mt-8 border-l-2 border-accent pl-4 font-medium text-navy-900">{situations.closing}</p>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {situations.items.map((t) => (
            <li key={t} className="py-4 text-lg">{t}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
