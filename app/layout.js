import { Newsreader, Public_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { site } from '@/lib/content';
import './globals.css';

const display = Newsreader({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Public_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata = {
  title: `${site.name} | Abogados de insolvencia para personas y empresas`,
  description: 'Abogados especialistas en insolvencia. Negociamos con sus acreedores, frenamos embargos y reorganizamos sus deudas. Primera consulta confidencial.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
