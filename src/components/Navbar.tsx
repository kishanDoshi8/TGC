'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Menu as MenuIcon, Phone, X } from 'lucide-react';
import logo from '@/assests/back.png';
import { store } from '@/data/menu';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/#rewards', label: 'Rewards' },
  { href: '/#visit', label: 'Visit us' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-[background-color,box-shadow] duration-300',
        scrolled || open
          ? 'bg-background/85 shadow-[0_1px_0_hsl(var(--border))] backdrop-blur-md'
          : 'bg-background'
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label="TGC Subs & Convenience home">
          <Image src={logo} alt="" width={44} height={44} className="h-10 w-10 md:h-12 md:w-12" priority />
          <span className="hidden font-display text-lg font-bold leading-tight sm:block">
            TGC Subs
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              & Convenience
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = l.href === pathname;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-primary',
                  active && 'text-primary'
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                {l.label}
              </Link>
            );
          })}
          <a
            href={store.phoneHref}
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <Phone className="h-4 w-4" /> Call to order
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-xl px-4 py-3 text-lg font-medium hover:bg-secondary',
                    l.href === pathname && 'bg-secondary text-primary'
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={store.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> {store.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-primary"
        style={{ scaleX: progress }}
      />
    </header>
  );
};

export default Navbar;
