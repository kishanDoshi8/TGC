
import {Button} from '@/components/ui/button';
import React from 'react';

const RewardsSection = () => {
  return (
    <section className="container mx-auto bg-secondary p-8 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-semibold mb-4">Save with Rewards</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Join our rewards program and start earning points with every purchase.
        Redeem points for discounts, free items, and exclusive offers!
      </p>
      <Button variant="accent">Join Now</Button>
    </section>
  );
};

export default RewardsSection;
