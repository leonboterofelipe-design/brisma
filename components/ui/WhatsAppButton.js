import { site } from '@/lib/content';
import { WhatsAppIcon } from '@/components/ui/Button';

export default function WhatsAppButton() {
  if (!/^\d{10,15}$/.test(site.whatsapp)) return null;

  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbanos por WhatsApp (abre WhatsApp)"
      className="fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-white text-[#25D366] shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 md:flex"
    >
      <WhatsAppIcon className="h-9 w-9" />
    </a>
  );
}
