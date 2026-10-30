import { site } from '@/lib/content';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/page/'] },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
