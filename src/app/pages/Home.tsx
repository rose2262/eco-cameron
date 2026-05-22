import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ParallaxBreak } from '../components/ParallaxBreak';
import { Tours } from '../components/Tours';
import { LandRoverSection } from '../components/LandRoverSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Reviews } from '../components/Reviews';
import { SocialProof } from '../components/SocialProof';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <ParallaxBreak />
      <Tours />
      <LandRoverSection />
      <WhyChooseUs />
      <Reviews />
      <SocialProof />
      <CTA />
    </>
  );
}
