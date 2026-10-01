import Hero from '@/components/sections/Hero';
import FirstVisit from '@/components/sections/FirstVisit';
import TrustBar from '@/components/sections/TrustBar';
import Situations from '@/components/sections/Situations';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import About from '@/components/sections/About';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';


export default function HomePage() {
  return (
    <>
    
      <Hero />
      <FirstVisit />
      <TrustBar />
      <Situations />
      <Services />
      <Process />
      <About />
      <Faq />
      <Contact />
    </>
  );
}
