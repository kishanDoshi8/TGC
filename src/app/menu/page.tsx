import type { Metadata } from 'next';
import { ContactSection } from '@/components/LandingPage';
import MenuBrowser from '@/components/Menu/MenuBrowser';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Menu | TGC Subs & Convenience',
  description: 'Signature and classic subs, salads, soups, kids combos and $60 party platters.',
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <MenuBrowser />
      </main>
      <ContactSection />
    </>
  );
}
