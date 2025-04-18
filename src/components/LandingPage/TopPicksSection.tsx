
'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import React, { useRef } from 'react';
import deli from '@/assests/Triple Deli Delight.jpg';
import steak from '@/assests/Philly Steak Melt.jpg';
import byPass from '@/assests/Triple By-pass.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TopPicksSection = () => {
  const topPicks = [
    {
      title: 'Triple Deli Delight',
      description:
        'from $13.49',
      image: deli,
    },
    {
      title: 'Philly Steak Melt',
      description:
        'from $13.49',
      image: steak,
    },
    {
      title: 'Triple By-pass',
      description:
        'from $12.49',
      image: byPass,
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const sequence = async () => {
    await controls.start({
      opacity: 0,
      y: 50,
    });
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  };
  React.useEffect(() => {
    if (inView) {
      sequence();
    }
  }, [controls, inView]);

  return (
    <motion.section ref={ref} animate={controls} className="container mx-auto p-4 text-center">
      <h2  className="text-4xl lg:text-5xl mb-4">
        Top Picks
      </h2>
      <p className="text-lg text-muted-foreground mb-6 lg:max-w-[50%] max-w-full mx-auto">Discover our top 3 best-selling sandwiches, freshly made with quality ingredients. Each sandwich is crafted to perfection to satisfy your cravings.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12">
        {topPicks.map((pick, index) => (
          <Card key={index} className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>{pick.title}</CardTitle>
              <CardDescription>{pick.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={pick.image}
                alt={pick.title}
                className="object-cover w-full rounded-b-xl"
                objectFit="cover"
                loading="eager"
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mx-auto mt-8">
        <Link href="/menu">
          <Button size="lg">View Full Menu</Button>
        </Link>
      </div>
    </motion.section>
  );
};

export default TopPicksSection;
