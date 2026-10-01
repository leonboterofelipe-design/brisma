import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Hero1 from '@/components/sections/Hero1';
import { hero } from '@/lib/content';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-navy-900 md:min-h-[680px] md:bg-neutral-900 md:text-white">
      <div aria-hidden="true" className="relative aspect-[16/10] w-full md:absolute md:inset-0 md:aspect-auto">
        <Hero1 />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent md:bg-gradient-to-l md:from-black/65 md:via-black/35 md:to-transparent" />
      </div>
      <Container className="relative py-8 sm:py-10 md:flex md:min-h-[680px] md:items-center md:py-20">
        <div className="mx-auto w-full max-w-2xl text-center md:ml-auto md:mr-0">
          <p className="mb-4 text-sm font-semibold text-accent md:mb-5 md:text-gold">ABOGADOS ESPECIALISTAS EN INSOLVENCIA</p>
          <h1 className="font-display text-3xl leading-[1.1] text-navy-900 sm:text-4xl md:text-5xl md:text-white lg:text-6xl">{hero.title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted md:mt-6 md:text-lg md:text-white/75">{hero.text}</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-8">
            <Button href="#contacto">Agendar consulta sin compromiso</Button>
            <Button href="#proceso" variant="outline" className="md:!border-white/40 md:!text-white md:hover:!bg-white/10">Conocer el proceso</Button>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm md:mt-4 md:text-white/60">{hero.note}</p>
        </div>
      </Container>
    </section>
  );
}
