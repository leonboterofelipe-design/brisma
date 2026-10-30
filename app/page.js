import Hero from '@/components/sections/Hero';
import FirstVisit from '@/components/sections/FirstVisit';
import TrustBar from '@/components/sections/TrustBar';
import Situations from '@/components/sections/Situations';
import Law from '@/components/sections/Law';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';
import JsonLd from '@/components/seo/JsonLd';
import { faq, home } from '@/lib/content';
import { faqPage } from '@/lib/schema';

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: { title: home.metaTitle, description: home.metaDescription, url: '/' },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPage(faq)} />
      <Hero />
      <TrustBar />
      <Situations />
      <Law />
      <Services />
      <Process />
      <About />
      <Team />
      <Faq />
      <FirstVisit />
      <Contact />
    </>
  );
}
