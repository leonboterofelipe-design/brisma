import { WhatsAppIcon } from '@/components/ui/Button';
import { whatsappUrl } from '@/lib/content';

// Barra de acción fija, solo en móvil.
export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex min-h-[3.25rem] items-center justify-center gap-2.5 rounded-full bg-gold px-4 text-center text-base font-semibold text-ink">
        <WhatsAppIcon />Escríbanos por WhatsApp<span className="sr-only"> (abre WhatsApp)</span>
      </a>
    </div>
  );
}
