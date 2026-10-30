'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { contact, site, whatsappUrl } from '@/lib/content';
import { trackEvent } from '@/lib/analytics';

const field = 'mt-1.5 w-full rounded-lg border border-field bg-white px-4 py-3.5 text-base font-normal text-ink transition-colors hover:border-navy-800 focus-visible:border-navy-900';
const optional = <span className="font-normal text-muted"> (opcional)</span>;

export default function Contact() {
  const [sent, setSent] = useState(false);

  // El formulario arma el mensaje y abre WhatsApp: el contacto llega directo al equipo.
  function onSubmit(e) {
    e.preventDefault();
    const { name, interest, message } = Object.fromEntries(new FormData(e.currentTarget));
    const text = [`Hola, soy ${name.trim()}.`, `${interest}.`, message?.trim()].filter(Boolean).join(' ');
    window.open(whatsappUrl(text), '_blank', 'noopener');
    setSent(true);
    trackEvent('generate_lead', { form: 'contacto', method: 'whatsapp', interest });
  }

  return (
    <Section id="contacto" tone="paper">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{contact.title}</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{contact.text}</p>
          <dl className="mt-10 max-w-md divide-y divide-line border-y border-line text-sm">
            <div className="flex justify-between gap-6 py-4"><dt className="font-semibold text-navy-900">Horario</dt><dd className="text-right text-muted">{site.hours}</dd></div>
            <div className="flex justify-between gap-6 py-4"><dt className="font-semibold text-navy-900">Correo</dt><dd><a href={`mailto:${site.email}`} className="text-navy-900 underline decoration-gold underline-offset-4">{site.email}</a></dd></div>
            <div className="flex justify-between gap-6 py-4"><dt className="font-semibold text-navy-900">WhatsApp</dt><dd><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-navy-900 underline decoration-gold underline-offset-4">{site.phone}</a></dd></div>
          </dl>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">La información que comparta se tratará de forma confidencial. Revisaremos su caso y le explicaremos los siguientes pasos.</p>
        </div>

        <form onSubmit={onSubmit} className="card space-y-5 p-6 text-ink sm:p-8">
          <label className="block text-base font-semibold">Nombre completo
            <input name="name" required autoComplete="name" className={field} />
          </label>
          <label className="block text-base font-semibold">¿Qué necesita?
            <select name="interest" className={field}>{contact.interests.map((o) => <option key={o}>{o}</option>)}</select>
          </label>
          <label className="block text-base font-semibold">Cuéntenos brevemente{optional}
            <textarea name="message" rows={3} className={field} />
          </label>
          <Button type="submit" className="w-full">Enviar por WhatsApp</Button>
          <p role="status" className="text-sm">
            {sent && <span className="text-green-800">Abrimos WhatsApp con su mensaje listo. Solo presione enviar.</span>}
          </p>
          <p className="text-xs text-muted">Al enviar acepta el tratamiento de sus datos. Su información es confidencial.</p>
        </form>
      </div>
    </Section>
  );
}
