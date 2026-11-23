import {
  AboutUsSection,
  ContactSection,
  ConvenienceSection,
  HeroSection,
  MarqueeStrip,
  RewardsSection,
  TopPicksSection,
} from '@/components/LandingPage';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <HeroSection />
        <MarqueeStrip />
        <TopPicksSection />
        <ConvenienceSection />
        <RewardsSection />
        <AboutUsSection />
      </main>
      <ContactSection />
    </>
  );
}
