import Section from '@/components/ui/Section';
import Slider from '@/components/ui/Slider';
import { about } from '@/lib/content';

export default function About() {
  return (
    <Section tone="paper">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl">{about.title}</h2>
          <blockquote className="mt-6 border-l-2 border-gold pl-5 font-display text-2xl leading-snug text-navy-800">{about.quote}</blockquote>
          <p className="mt-6 max-w-lg text-muted">{about.text}</p>
        </div>
        <Slider label="Por qué elegirnos" grid="md:grid md:grid-cols-2 md:gap-6">
          {about.values.map(([t, d]) => (
            <article key={t} className="card p-6">
              <h3 className="text-2xl leading-tight lg:text-xl xl:text-2xl">{t}</h3>
              <p className="mt-2 leading-relaxed text-muted lg:text-sm">{d}</p>
            </article>
          ))}
        </Slider>
      </div>
    </Section>
  );
}
