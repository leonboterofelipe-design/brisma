import { Cormorant_Garamond, Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCta from '@/components/layout/MobileCta';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Analytics from '@/components/seo/Analytics';
import JsonLd from '@/components/seo/JsonLd';
import { site, home } from '@/lib/content';
import { legalService } from '@/lib/schema';
import './globals.css';

const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display', display: 'swap' });
const body = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });

export const metadata = {
  metadataBase: new URL(site.url),
  title: home.metaTitle,
  description: home.metaDescription,
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: site.name,
    images: [{ url: '/abogados-insolvencia-brisma.png', width: 2078, height: 757, alt: 'Equipo de abogados de insolvencia de Brisma' }],
  },
  // Google Search Console: definir NEXT_PUBLIC_GSC_VERIFICATION con el código de verificación.
  verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="pb-24 md:pb-0">
        <JsonLd data={legalService()} />
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        <Header />
        <main id="contenido" tabIndex={-1} className="focus:outline-none">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileCta />
        <Analytics />
      </body>
    </html>
  );
}
