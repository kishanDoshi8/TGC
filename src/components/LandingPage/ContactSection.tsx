import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Mail, MapPin, Navigation, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import storeImg from '@/assests/store.png';
import logo from '@/assests/back.png';
import { store } from '@/data/menu';

/** "Visit us" block + site footer. Shared by the home and menu pages. */
const ContactSection = () => {
  return (
    <footer id="visit" className="scroll-mt-20 bg-foreground text-background">
      <div className="container mx-auto grid gap-12 px-4 py-20 md:grid-cols-2 md:py-24">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src={storeImg}
              alt="The TGC Subs & Convenience storefront"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <Image
            src={logo}
            alt=""
            width={96}
            height={96}
            className="absolute -left-4 -top-4 h-20 w-20 -rotate-12 drop-shadow-xl md:h-24 md:w-24"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Visit us</p>
          <h2 className="text-4xl font-extrabold md:text-5xl">Come hungry.</h2>
          <p className="mt-4 max-w-md text-lg opacity-70">
            Drop by for a fresh sub, or give us a call and we&apos;ll have it ready.
          </p>

          <ul className="mt-10 space-y-5">
            <li>
              <a href={store.mapsHref} target="_blank" rel="noopener noreferrer" className="group flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span>
                  {store.addressLines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                  <span className="mt-1 inline-flex items-center gap-1 text-sm text-accent group-hover:underline">
                    <Navigation className="h-3.5 w-3.5" /> Get directions
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href={store.phoneHref} className="flex items-center gap-4 hover:text-accent">
                <Phone className="h-5 w-5 shrink-0 text-accent" /> {store.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${store.email}`} className="flex items-center gap-4 break-all hover:text-accent">
                <Mail className="h-5 w-5 shrink-0 text-accent" /> {store.email}
              </a>
            </li>
            <li>
              <a href={store.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-accent">
                <Facebook className="h-5 w-5 shrink-0 text-accent" /> Follow us on Facebook
              </a>
            </li>
          </ul>
        </Reveal>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-sm opacity-60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} TGC Subs &amp; Convenience. All rights reserved.</p>
          <nav className="flex gap-6">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <Link href="/menu" className="hover:opacity-100">Menu</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
