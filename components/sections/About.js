import Section from '@/components/ui/Section';
import { about } from '@/lib/content';

export default function About() {
  return (
    <Section tone="paper">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl">{about.title}</h2>
          <blockquote className="mt-6 border-l-2 border-accent pl-5 font-display text-2xl leading-snug text-navy-800">{about.quote}</blockquote>
          <p className="mt-6 max-w-lg text-muted">{about.text}</p>
        </div>
        <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {about.values.map(([t, d]) => (
            <div key={t} className="border-t border-line pt-4">
              <dt className="font-semibold text-navy-900">{t}</dt>
              <dd className="mt-1 text-sm text-muted">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
