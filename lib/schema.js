import { site } from '@/lib/content';

export function legalService() {
  const { street, city, region } = site.address;
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${site.url}/#negocio`,
    name: site.name,
    description: 'Abogados especialistas en insolvencia de persona natural en Colombia (Ley 2445 de 2025).',
    url: site.url,
    image: `${site.url}/abogados-insolvencia-brisma.png`,
    email: site.email,
    ...(site.phone && { telephone: site.phone }),
    ...(street && { address: { '@type': 'PostalAddress', streetAddress: street, addressLocality: city, addressRegion: region, addressCountry: 'CO' } }),
    openingHours: site.openingHours,
    areaServed: { '@type': 'Country', name: 'Colombia' },
    knowsAbout: ['Insolvencia de persona natural', 'Ley 2445 de 2025', 'Negociación de deudas', 'Liquidación patrimonial'],
    sameAs: [site.instagram],
  };
}

export function faqPage(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
}

export function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, path }, i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${site.url}${path}` })),
  };
}
