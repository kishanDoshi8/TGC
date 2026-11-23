'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Baby, Check, Flame, Phone, Salad, Sandwich, Search, Star, Users, X } from 'lucide-react';
import {
  classicSubs,
  kidsMenu,
  platter,
  saladsAndSoups,
  signatureSubs,
  slugify,
  store,
  type SimpleItem,
  type Sub,
} from '@/data/menu';
import { cn } from '@/lib/utils';

type Size = 'regular' | 'large';

const categories = [
  { id: 'signature', label: 'Signature Subs', icon: Star },
  { id: 'classic', label: 'Classic Subs', icon: Sandwich },
  { id: 'salads', label: 'Salads & Soups', icon: Salad },
  { id: 'kids', label: 'Kids Menu', icon: Baby },
  { id: 'platter', label: 'TGC Platter', icon: Users },
] as const;

const matches = (q: string, ...fields: (string | undefined)[]) =>
  !q || fields.some((f) => f?.toLowerCase().includes(q));

export default function MenuBrowser() {
  const [size, setSize] = useState<Size>('regular');
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<string>(categories[0].id);
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const q = query.trim().toLowerCase();
  const filtered = useMemo(
    () => ({
      signature: signatureSubs.filter((s) => matches(q, s.name, s.description)),
      classic: classicSubs.filter((s) => matches(q, s.name, s.description)),
      salads: saladsAndSoups.filter((s) => matches(q, s.name, s.description)),
      kids: kidsMenu.filter((s) => matches(q, s.name, s.description)),
      platter: matches(q, platter.name, 'platter party group', ...platter.options),
    }),
    [q]
  );
  const counts: Record<string, number> = {
    signature: filtered.signature.length,
    classic: filtered.classic.length,
    salads: filtered.salads.length,
    kids: filtered.kids.length,
    platter: filtered.platter ? 1 : 0,
  };
  const nothingFound = Object.values(counts).every((c) => c === 0);

  // Scroll-spy: highlight the category currently in view.
  useEffect(() => {
    const els = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          const top = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          setActive(top.target.id);
        }
      },
      { rootMargin: '-160px 0px -55% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [q]);

  // Keep the active chip visible on small screens.
  useEffect(() => {
    chipRefs.current[active]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [active]);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-accent/25 blur-2xl" />
        <div className="container relative mx-auto px-4 pb-12 pt-12 md:pb-16 md:pt-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent"
          >
            Made fresh to order
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-5xl font-extrabold md:text-7xl"
          >
            Our Menu
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <label className="relative flex-1 sm:max-w-sm">
              <span className="sr-only">Search the menu</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search subs, e.g. turkey"
                className="h-12 w-full rounded-full bg-card pl-12 pr-10 text-foreground shadow-lg outline-none ring-accent placeholder:text-muted-foreground focus-visible:ring-2 [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-secondary"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </label>

            <div role="radiogroup" aria-label="Sub size" className="inline-flex w-fit rounded-full bg-black/20 p-1">
              {(['regular', 'large'] as Size[]).map((s) => (
                <button
                  key={s}
                  role="radio"
                  aria-checked={size === s}
                  onClick={() => setSize(s)}
                  className={cn(
                    'relative rounded-full px-5 py-2.5 text-sm font-semibold capitalize transition-colors',
                    size === s ? 'text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'
                  )}
                >
                  {size === s && (
                    <motion.span
                      layoutId="size-pill"
                      className="absolute inset-0 rounded-full bg-card shadow"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{s}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky category bar */}
      <div className="sticky top-16 z-30 border-b bg-background/90 backdrop-blur-md md:top-20">
        <nav className="no-scrollbar container mx-auto flex gap-2 overflow-x-auto px-4 py-3" aria-label="Menu categories">
          {categories.map((c) => {
            const disabled = counts[c.id] === 0;
            return (
              <a
                key={c.id}
                href={`#${c.id}`}
                ref={(el) => {
                  chipRefs.current[c.id] = el;
                }}
                aria-current={active === c.id ? 'true' : undefined}
                className={cn(
                  'relative inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active === c.id ? 'text-primary-foreground' : 'text-foreground hover:bg-secondary',
                  disabled && 'pointer-events-none opacity-40'
                )}
              >
                {active === c.id && (
                  <motion.span
                    layoutId="cat-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <c.icon className="relative h-4 w-4" />
                <span className="relative">{c.label}</span>
                {q && <span className="relative text-xs opacity-70">{counts[c.id]}</span>}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="container mx-auto px-4 pb-24">
        {nothingFound && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-24 text-center">
            <Sandwich className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-xl font-semibold">No matches for “{query}”</p>
            <p className="mt-1 text-muted-foreground">Try a filling like ham, chicken or veggie.</p>
            <button onClick={() => setQuery('')} className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
              Clear search
            </button>
          </motion.div>
        )}

        <SubSection id="signature" title="Signature Subs" note="Our house creations" subs={filtered.signature} size={size} />
        <SubSection id="classic" title="Classic Subs" note="The tried-and-true favourites" subs={filtered.classic} size={size} />

        <div className="grid gap-x-12 lg:grid-cols-2">
          <SimpleSection id="salads" title="Salads & Soups" items={filtered.salads} />
          <SimpleSection id="kids" title="Kids Menu" items={filtered.kids} />
        </div>

        {filtered.platter && <PlatterCard />}
      </div>
    </>
  );
}

function SectionHeading({ title, note }: { title: string; note?: string }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 border-b-2 border-foreground pb-3">
      <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
      {note && <p className="hidden text-sm text-muted-foreground sm:block">{note}</p>}
    </div>
  );
}

function SubSection({ id, title, note, subs, size }: { id: string; title: string; note?: string; subs: Sub[]; size: Size }) {
  if (!subs.length) return <span id={id} />;
  return (
    <section id={id} className="scroll-mt-36 pt-14 md:scroll-mt-40">
      <SectionHeading title={title} note={note} />
      <motion.ul layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {subs.map((sub, i) => (
            <SubCard key={sub.name} sub={sub} size={size} index={i} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}

function SubCard({ sub, size, index }: { sub: Sub; size: Size; index: number }) {
  const price = size === 'regular' ? sub.regularPrice : sub.largePrice;
  const other = size === 'regular' ? sub.largePrice : sub.regularPrice;
  return (
    <motion.li
      layout
      id={slugify(sub.name)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: Math.min(index, 6) * 0.03 }}
      className="group flex scroll-mt-40 gap-4 rounded-3xl bg-card p-5 shadow-sm ring-1 ring-foreground/5 transition-shadow hover:shadow-lg target:ring-2 target:ring-primary"
    >
      {sub.image && (
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-secondary">
          <Image src={sub.image} alt="" fill sizes="80px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            {sub.popular && (
              <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-accent/30 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide">
                <Flame className="h-3 w-3 text-primary" /> Popular
              </span>
            )}
            <h3 className="text-lg font-bold leading-snug">{sub.name}</h3>
            <p className="text-sm text-muted-foreground">{sub.description}</p>
          </div>
          <div className="shrink-0 text-right">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={price}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="font-display text-xl font-extrabold text-primary"
              >
                {price}
              </motion.p>
            </AnimatePresence>
            <p className="text-xs text-muted-foreground">
              {size === 'regular' ? 'Large' : 'Regular'} {other}
            </p>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

function SimpleSection({ id, title, items }: { id: string; title: string; items: SimpleItem[] }) {
  if (!items.length) return <span id={id} />;
  return (
    <section id={id} className="scroll-mt-36 pt-14 md:scroll-mt-40">
      <SectionHeading title={title} />
      <ul className="divide-y divide-dashed divide-foreground/15">
        {items.map((item) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-baseline gap-3 py-4"
          >
            <div className="min-w-0">
              <h3 className="text-lg font-bold">{item.name}</h3>
              {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
            </div>
            <span aria-hidden className="mb-1 flex-1 border-b-2 border-dotted border-foreground/15" />
            <span className="font-display text-xl font-extrabold text-primary">{item.price}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

function PlatterCard() {
  return (
    <section id="platter" className="scroll-mt-36 pt-16 md:scroll-mt-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[2rem] bg-foreground p-8 text-background md:p-12"
      >
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">TGC Platter</p>
            <h2 className="text-4xl font-extrabold md:text-5xl">{platter.name}</h2>
            <p className="mt-4 text-lg opacity-75">{platter.description}.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="rounded-2xl bg-accent px-5 py-3 font-display text-3xl font-extrabold text-accent-foreground">
                {platter.price}
              </span>
              <a
                href={store.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> Call to order
              </a>
            </div>
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {platter.options.map((o, i) => (
              <motion.li
                key={o}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.04 }}
                className="flex items-center gap-3 rounded-2xl bg-background/10 px-4 py-3"
              >
                <Check className="h-5 w-5 shrink-0 text-accent" />
                {o}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
