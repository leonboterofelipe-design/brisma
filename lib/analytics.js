export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', name, params);
}
