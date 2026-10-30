import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Hero1 from '@/components/sections/Hero1';
import Takeaways from '@/components/ui/Takeaways';
import { hero, summary } from '@/lib/content';

export default function Hero() {
  return (
    <section className="bg-paper text-navy-900">
      <div className="relative aspect-[16/9] w-full md:aspect-[2078/757]">
        <Hero1 />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-paper to-transparent" />
      </div>
      <Container className="relative pb-14 pt-6 md:-mt-10 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">{hero.eyebrow}</p>
          <h1 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{hero.title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{hero.text}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="#contacto">Agendar consulta sin compromiso</Button>
            <Button href="#proceso" variant="outline">Conocer el proceso</Button>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted sm:text-sm">{hero.note}</p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Takeaways title={summary.title} items={summary.items} />
        </div>
      </Container>
    </section>
  );
}
