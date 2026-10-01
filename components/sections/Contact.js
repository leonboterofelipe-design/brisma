'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { contact } from '@/lib/content';

const field = 'mt-1.5 w-full rounded-sm border border-line bg-white px-3.5 py-3 text-ink';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const payload = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error();
      e.currentTarget.reset();
      setStatus('ok');
    } catch {
      setStatus('error');
    }
  }

  return (
    <Section id="contacto" tone="paper">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl leading-tight md:text-4xl">{contact.title}</h2>
          <p className="mt-4 max-w-md text-lg text-muted">{contact.text}</p>
          <p className="mt-8 max-w-md border-t border-line pt-5 text-sm leading-relaxed text-muted">La información que comparta se tratará de forma confidencial. Revisaremos su caso y le explicaremos los siguientes pasos.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 border border-line border-t-2 border-t-accent bg-white p-7 text-ink">
          <label className="block text-sm font-semibold">Nombre completo
            <input name="name" required autoComplete="name" className={field} />
          </label>
          <label className="block text-sm font-semibold">Teléfono o WhatsApp
            <input name="phone" type="tel" required autoComplete="tel" className={field} />
          </label>
          <label className="block text-sm font-semibold">Correo electrónico
            <input name="email" type="email" autoComplete="email" className={field} />
          </label>
          <label className="block text-sm font-semibold">¿Qué necesita?
            <select name="interest" className={field}>{contact.interests.map((o) => <option key={o}>{o}</option>)}</select>
          </label>
          <label className="block text-sm font-semibold">Cuéntenos brevemente
            <textarea name="message" rows={3} className={field} />
          </label>
          <Button type="submit"  className="w-full" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : 'Solicitar mi consulta'}
          </Button>
          <p role="status" className="text-sm">
            {status === 'ok' && <span className="text-green-800">Recibimos su solicitud. Le contactaremos en breve.</span>}
            {status === 'error' && <span className="text-red-700">No pudimos enviar el formulario. Intente de nuevo o escríbanos por WhatsApp.</span>}
          </p>
          <p className="text-xs text-muted">Al enviar acepta el tratamiento de sus datos. Su información es confidencial.</p>
        </form>
      </div>
    </Section>
  );
}
