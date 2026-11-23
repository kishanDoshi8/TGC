'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, MapPin, Ruler } from 'lucide-react';
import promotion from '@/assests/Promotion.png';
import { store } from '@/data/menu';

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* soft background shapes */}
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative mx-auto grid items-center gap-12 px-4 pb-16 pt-10 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:pb-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-sm text-muted-foreground shadow-sm"
          >
            <MapPin className="h-4 w-4 text-primary" /> Front St, Quinte West
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="mt-6 text-balance text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl"
          >
            Fresh subs,
            <br />
            <span className="relative inline-block text-primary sm:whitespace-nowrap">
              made your way.
              <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 w-full text-accent" preserveAspectRatio="none">
                <motion.path
                  d="M2 9 C 80 2, 220 2, 298 7"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-8 max-w-lg text-lg text-muted-foreground"
          >
            Signature &amp; classic subs, salads, soups and party platters — plus snacks, drinks and
            everyday essentials from our convenience store.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              See the menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={store.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 bg-card px-7 py-3.5 font-semibold transition hover:border-foreground/40"
            >
              Call {store.phone.replace('+1 ', '')}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-foreground/10 ring-1 ring-foreground/5 lg:aspect-[5/4]">
            <Image
              src={promotion}
              alt="A fresh sub sandwich wrapped in paper"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="absolute -left-3 bottom-8 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-xl sm:-left-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Leaf className="h-5 w-5" />
            </span>
            <div className="text-sm">
              <p className="font-semibold">Made fresh</p>
              <p className="text-muted-foreground">to order, every time</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease }}
            className="absolute -right-2 top-6 flex items-center gap-3 rounded-2xl bg-accent px-4 py-3 text-accent-foreground shadow-xl sm:-right-5"
          >
            <Ruler className="h-5 w-5" />
            <div className="text-sm">
              <p className="font-semibold">Regular or Large</p>
              <p className="opacity-75">subs from $9.99</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
