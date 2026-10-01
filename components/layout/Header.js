'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { nav, site } from '@/lib/content';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="font-display text-2xl font-semibold tracking-wide text-navy-900">{site.name}</a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-navy-900">{l.label}</a>
          ))}
          <Button href="#contacto" className="!py-2.5">Agendar consulta</Button>
        </nav>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-6 bg-navy-900" />
          <span className="mt-1.5 block h-0.5 w-6 bg-navy-900" />
          <span className="mt-1.5 block h-0.5 w-6 bg-navy-900" />
        </button>
      </Container>

      {open && (
        <nav id="menu-movil" aria-label="Móvil" className="border-t border-line bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-navy-900">{l.label}</a>
            ))}
            <Button href="#contacto" onClick={() => setOpen(false)} className="mt-2">Agendar consulta</Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
