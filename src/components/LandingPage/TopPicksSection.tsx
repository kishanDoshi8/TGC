
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import React from 'react';
import deli from '@/assests/Triple Deli Delight.jpg';
import steak from '@/assests/Philly Steak Melt.jpg';
import byPass from '@/assests/Triple By-pass.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

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

  return (
    <section className="container mx-auto p-4 text-center">
      <h2 className="text-4xl lg:text-5xl mb-4">
        Top Picks
      </h2>
      <p className="text-lg text-muted-foreground mb-6 lg:max-w-[50%] max-w-full mx-auto">Discover our top 3 best-selling sandwiches, freshly made with quality ingredients. Each sandwich is crafted to perfection to satisfy your cravings.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="object-cover w-full rounded-md"
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
    </section>
  );
};

export default TopPicksSection;
