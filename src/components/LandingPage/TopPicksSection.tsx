'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { slugify, topPicks } from '@/data/menu';

const TopPicksSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Crowd favourites</p>
          <h2 className="text-4xl font-extrabold md:text-5xl">Our top picks</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The three best-selling subs in the house — freshly made with quality ingredients and built to satisfy.
          </p>
        </div>
        <Link href="/menu" className="group inline-flex items-center gap-2 font-semibold text-primary">
          View full menu
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {topPicks.map((pick, i) => (
          <Reveal key={pick.title} delay={i * 0.08}>
            <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
              <Link
                href={`/menu#${slugify(pick.menuName)}`}
                className="group block overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-foreground/5 transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <Image
                    src={pick.image}
                    alt={pick.title}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                    <Flame className="h-3.5 w-3.5 text-primary" /> #{i + 1} seller
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-2xl font-bold">{pick.title}</h3>
                    <p className="mt-1 text-muted-foreground">{pick.blurb}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">from</p>
                    <p className="font-display text-2xl font-extrabold text-primary">{pick.price}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default TopPicksSection;
