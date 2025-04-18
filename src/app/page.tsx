
import {
  AboutUsSection,
  ContactSection,
  HeroSection,
  RewardsSection,
  TopPicksSection,
} from '@/components/LandingPage';
import Navbar from '@/components/Navbar';
import React from 'react';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-16">
        <HeroSection />
        <TopPicksSection />
        <RewardsSection />
        <AboutUsSection />
        <hr />
        <ContactSection />
      </main>
    </>
  );
}

