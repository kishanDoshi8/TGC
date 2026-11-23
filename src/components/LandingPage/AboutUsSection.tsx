import { Facebook, Heart, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { store } from '@/data/menu';

const AboutUsSection = () => {
  return (
    <section className="container mx-auto px-4 pb-20 md:pb-28">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">About us</p>
          <h2 className="text-4xl font-extrabold md:text-5xl">Get to know us better.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            TGC Subs &amp; Convenience, located in Trenton, Canada, is dedicated to providing top-notch subs and
            sandwiches while also running a convenience store. Our goal is to serve the best quality food along with a
            variety of everyday essentials, all backed by exceptional customer service. Come visit us for a delicious
            meal and all your convenience needs!
          </p>
          <p className="mt-6 flex items-center gap-2 font-medium">
            <Heart className="h-5 w-5 fill-primary text-primary" /> Proudly local in Quinte West.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={store.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col justify-between gap-6 rounded-3xl bg-accent p-8 text-accent-foreground transition hover:-translate-y-1 hover:shadow-xl"
          >
            <Sparkles className="h-8 w-8" />
            <div>
              <h3 className="text-2xl font-bold">Don&apos;t miss a deal.</h3>
              <p className="mt-2 opacity-80">
                We regularly post seasonal &amp; holiday offers, limited-time promotions and updates on Facebook. Follow
                us and be the first to grab them!
              </p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background">
                <Facebook className="h-4 w-4" /> Follow on Facebook
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutUsSection;
