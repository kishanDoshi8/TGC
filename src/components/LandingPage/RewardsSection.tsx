'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Gift, ShoppingBag, Stamp } from 'lucide-react';
import Reveal from '@/components/Reveal';
import loyalty from '@/assests/loyalty.png';

const steps = [
  { icon: ShoppingBag, title: 'Make a purchase', text: 'Pick up a Rewards Card with your first order.' },
  { icon: Stamp, title: 'Collect as you go', text: 'Every visit moves you along the card.' },
  { icon: Gift, title: 'Unlock rewards', text: 'Special offers worth more than $50.' },
];

const RewardsSection = () => {
  return (
    <section id="rewards" className="scroll-mt-24 px-4 py-20 md:py-28">
      <div className="container relative mx-auto overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-primary-foreground md:px-14 md:py-20">
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-accent/25 blur-2xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">TGC Rewards</p>
            <h2 className="text-4xl font-extrabold md:text-5xl">Save with every visit.</h2>
            <p className="mt-4 max-w-lg text-lg opacity-90">
              After your first purchase, you&apos;ll receive a special offer on every other purchase. Enjoy unique deals
              that make every stop even better.
            </p>

            <ol className="mt-10 space-y-5">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">
                      <span className="mr-2 opacity-60">0{i + 1}</span>
                      {s.title}
                    </p>
                    <p className="text-sm opacity-80">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              initial={{ rotate: -4 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="mx-auto max-w-xl overflow-hidden rounded-3xl shadow-2xl shadow-black/30 ring-4 ring-white/20"
            >
              <Image
                src={loyalty}
                alt="TGC Subs Rewards Card"
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-auto w-full"
              />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
