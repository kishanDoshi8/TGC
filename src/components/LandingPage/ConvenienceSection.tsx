'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Candy, CupSoda, Package, Popcorn, Users } from 'lucide-react';
import Reveal from '@/components/Reveal';

const items = [
  { icon: Popcorn, title: 'Snacks & chips', text: 'Grab-and-go favourites' },
  { icon: Candy, title: 'Candy & treats', text: 'Something sweet for later' },
  { icon: CupSoda, title: 'Cold drinks', text: 'Pop, juice & water' },
  { icon: Package, title: 'Everyday essentials', text: 'The things you ran out of' },
];

const ConvenienceSection = () => {
  return (
    <section className="bg-dots">
      <div className="container mx-auto grid gap-10 px-4 py-20 md:py-24 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">More than subs</p>
          <h2 className="text-4xl font-extrabold md:text-5xl">Your neighbourhood convenience stop.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pair your sub with a drink and a snack, or pick up what you need on the way home — all in one stop.
          </p>
          <Link
            href="/menu#platter"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-4 text-background transition hover:-translate-y-0.5"
          >
            <Users className="h-5 w-5 text-accent" />
            <span>
              <span className="block font-semibold">Feeding a crowd?</span>
              <span className="text-sm opacity-75">5-sub platters for $60</span>
            </span>
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4, rotate: i % 2 ? 1 : -1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="h-full rounded-3xl bg-card p-6 shadow-sm ring-1 ring-foreground/5"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <it.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConvenienceSection;
