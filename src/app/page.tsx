
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
      <main className="flex flex-col gap-16 py-8">
        <HeroSection />
        <TopPicksSection />
        <RewardsSection />
        <AboutUsSection />
        <ContactSection />
      </main>
    </>
  );
}

