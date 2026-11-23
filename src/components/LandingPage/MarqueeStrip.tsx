import { Sparkle } from 'lucide-react';
import { classicSubs, signatureSubs } from '@/data/menu';

/** Slow, CSS-only scrolling ribbon of sub names (pauses for reduced-motion users). */
const MarqueeStrip = () => {
  const names = [...signatureSubs, ...classicSubs].map((s) => s.name);
  const row = (hidden?: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {names.map((n) => (
        <span key={n} className="flex items-center gap-6 px-6 font-display text-xl font-bold uppercase tracking-wide md:text-2xl">
          {n}
          <Sparkle className="h-4 w-4 fill-accent text-accent" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="-rotate-1 overflow-hidden bg-primary py-4 text-primary-foreground shadow-lg">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row()}
        {row(true)}
      </div>
    </div>
  );
};

export default MarqueeStrip;
