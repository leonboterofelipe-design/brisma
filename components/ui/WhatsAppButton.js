import { site } from '@/lib/content';

export default function WhatsAppButton() {
  if (!/^\d{10,15}$/.test(site.whatsapp)) return null;

  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-accent-dark"
    >
      WhatsApp
    </a>
  );
}
