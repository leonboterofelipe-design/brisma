import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/lib/content';

export default function Testimonials() {
  return (
    <Section>
      <SectionHeading title={testimonials.title} text={testimonials.note} />
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {testimonials.items.map((t, i) => (
          <blockquote key={i} className="border-t border-line pt-6">
            <p className="font-display text-xl leading-snug text-navy-900">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-muted">{t.author}</footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
