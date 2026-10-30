import { site } from '@/lib/content';

const hasWhatsapp = /^\d{10,15}$/.test(site.whatsapp);

// Barra de acción fija, solo en móvil.
export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-gold/30 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a href="/#contacto" className="flex min-h-[3.25rem] flex-1 items-center justify-center rounded-full bg-gold px-4 text-center text-base font-semibold text-ink">Agendar mi consulta</a>
      {hasWhatsapp && (
        <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex min-h-[3.25rem] items-center rounded-full bg-accent px-5 text-base font-semibold text-white">WhatsApp</a>
      )}
    </div>
  );
}
