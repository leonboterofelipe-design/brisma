import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { situations, whatsappUrl } from '@/lib/content';

export default function Situations() {
  return (
    <Section tone="paper">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
        <div>
          <SectionHeading title={situations.title} text={situations.text} />
          <p className="mt-8 hidden border-l-2 border-gold pl-4 font-medium text-navy-900 lg:block">{situations.closing}</p>
          <Button href={whatsappUrl()} className="mt-8 hidden lg:inline-flex">Quiero saber si mi caso aplica</Button>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4">
          {situations.items.map((t) => (
            <li key={t} className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 text-base leading-snug text-ink shadow-[0_6px_20px_-12px_rgba(11,37,69,0.25)] sm:p-5">
              <span aria-hidden className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-sm font-bold text-gold-ink">✓</span>
              {t}
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <p className="border-l-2 border-gold pl-4 font-medium text-navy-900">{situations.closing}</p>
          <Button href={whatsappUrl()} className="mt-6 w-full sm:w-auto">Quiero saber si mi caso aplica</Button>
        </div>
      </div>
    </Section>
  );
}
