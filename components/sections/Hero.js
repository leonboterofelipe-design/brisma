import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Hero1 from '@/components/sections/Hero1';
import { hero } from '@/lib/content';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-900 text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <Hero1 />
        <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/35 to-transparent" />
      </div>
      <Container className="relative flex min-h-[580px] items-center py-16 md:min-h-[680px] md:py-20">
        <div className="ml-auto w-full max-w-2xl text-center">
          <p className="mb-5 text-sm font-semibold text-gold">ABOGADOS ESPECIALISTAS EN INSOLVENCIA</p>
          <h1 className="font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">{hero.title}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">{hero.text}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="#contacto">Agendar consulta sin compromiso</Button>
            <Button href="#proceso" variant="outline" className="!border-white/40 !text-white hover:!bg-white/10">Conocer el proceso</Button>
          </div>
          <p className="mt-4 text-sm text-white/60">{hero.note}</p>
        </div>
      </Container>
    </section>
  );
}
