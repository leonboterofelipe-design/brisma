import Link from 'next/link';
import Container from '@/components/ui/Container';
import ShareButton from '@/components/ui/ShareButton';
import { nav, site } from '@/lib/content';
import { guides } from '@/lib/guides';

const heading = 'text-xs font-semibold uppercase tracking-[0.14em] text-gold';
const link = 'inline-block py-1 hover:text-white';

export default function Footer() {
  return (
    <footer className="on-dark bg-navy-950 text-sm text-white/75">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 md:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="font-display text-3xl font-semibold text-white">{site.name}</Link>
          <p className="mt-3 max-w-xs leading-relaxed">Abogados de insolvencia para personas naturales en Colombia. Le ayudamos a salir de sus deudas con un acuerdo que sí puede cumplir.</p>
          <ShareButton className="mt-5 text-white" />
        </div>

        <nav aria-label="Secciones">
          <p className={heading}>El sitio</p>
          <ul className="mt-4 space-y-1">
            {nav.slice(1).map((l) => <li key={l.href}><a href={l.href} className={link}>{l.label}</a></li>)}
            <li><a href="/#contacto" className={link}>Contacto</a></li>
          </ul>
        </nav>

        <nav aria-label="Guías">
          <p className={heading}>Guías</p>
          <ul className="mt-4 space-y-1">
            {guides.map((g) => <li key={g.slug}><Link href={`/${g.slug}`} className={link}>{g.label}</Link></li>)}
          </ul>
        </nav>

        <div>
          <p className={heading}>Contacto</p>
          <ul className="mt-4 space-y-1">
            <li className="py-1">{site.hours}</li>
            {site.phone && <li><a href={`tel:${site.phone.replace(/\s/g, '')}`} className={link}>{site.phone}</a></li>}
            <li><a href={`mailto:${site.email}`} className={link}>{site.email}</a></li>
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className={link}>Instagram<span className="sr-only"> (se abre en una pestaña nueva)</span></a></li>
          </ul>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>La información de este sitio es orientativa y no reemplaza una asesoría legal.</p>
        </div>
      </Container>
    </footer>
  );
}
