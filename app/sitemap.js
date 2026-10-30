import { site } from '@/lib/content';
import { guides } from '@/lib/guides';

export default function sitemap() {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...guides.map((g, i) => ({ url: `${site.url}/${g.slug}`, lastModified: now, changeFrequency: 'monthly', priority: i === 0 ? 0.9 : 0.8 })),
  ];
}
