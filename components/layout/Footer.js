import Container from '@/components/ui/Container';
import { site } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-navy-900 py-10 text-sm text-white/70">
      <Container className="flex flex-col justify-between gap-6 md:flex-row">
        <div>
          <p className="font-display text-xl text-white">{site.name}</p>
          <p className="mt-1">Abogados especialistas en insolvencia.</p>
        </div>
        <div className="space-y-1">
          <p>Asesoría para personas y empresas.</p>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Instagram</a>
        </div>
        <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}
