'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { nav, site } from '@/lib/content';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <Container className="flex h-[4.25rem] items-center justify-between">
        <a href="/" className="font-display text-3xl font-semibold text-navy-900">{site.name}</a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="py-2 text-sm text-muted transition-colors hover:text-navy-900">{l.label}</a>
          ))}
          <Button href="/#contacto" className="!py-2.5">Agendar consulta</Button>
        </nav>

        <button
          type="button"
          className="-mr-2 flex min-h-12 items-center gap-2.5 rounded-full px-3 text-sm font-semibold text-navy-900 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Cerrar' : 'Menú'}
          <span aria-hidden className="relative block h-4 w-6">
            <span className={`absolute left-0 block h-0.5 w-6 bg-navy-900 transition-transform ${open ? 'top-[7px] rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-[7px] block h-0.5 w-6 bg-navy-900 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 block h-0.5 w-6 bg-navy-900 transition-transform ${open ? 'top-[7px] -rotate-45' : 'top-[14px]'}`} />
          </span>
        </button>
      </Container>

      {open && (
        <nav id="menu-movil" aria-label="Móvil" className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col divide-y divide-line py-2">
            {nav.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-4 text-lg font-medium text-navy-900">{l.label}</a>
            ))}
            <div className="py-4"><Button href="/#contacto" onClick={() => setOpen(false)} className="w-full">Agendar consulta</Button></div>
          </Container>
        </nav>
      )}
    </header>
  );
}
