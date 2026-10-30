'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function ShareButton({ title, className = '' }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    trackEvent('share', { method: navigator.share ? 'native' : 'copy', content_type: 'page', item_id: window.location.pathname });
    if (navigator.share) {
      try { await navigator.share({ title: title || document.title, url }); } catch { /* cancelado */ }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* sin permiso de portapapeles */ }
  }

  return (
    <button type="button" onClick={share} className={`inline-flex items-center gap-2 text-sm font-semibold underline decoration-gold underline-offset-4 ${className}`}>
      <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></svg>
      <span aria-live="polite">{copied ? 'Enlace copiado' : 'Compartir'}</span>
    </button>
  );
}
