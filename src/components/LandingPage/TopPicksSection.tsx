
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import React from 'react';

const TopPicksSection = () => {
  const topPicks = [
    {
      title: 'The Classic Italian',
      description:
        'A timeless favorite with ham, salami, and provolone. Drizzled with our house vinaigrette.',
      image: 'https://picsum.photos/400/300',
    },
    {
      title: 'Spicy Meatball',
      description:
        'Savory meatballs smothered in marinara sauce, topped with melted mozzarella cheese.',
      image: 'https://picsum.photos/400/301',
    },
    {
      title: 'Veggie Delight',
      description:
        'A colorful assortment of fresh veggies with a tangy hummus spread.',
      image: 'https://picsum.photos/400/302',
    },
  ];

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Our Top 3 Picks
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topPicks.map((pick, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pick.title}</CardTitle>
              <CardDescription>{pick.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={pick.image}
                alt={pick.title}
                className="rounded-md object-cover h-48 w-full"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TopPicksSection;
