
import {Button} from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import loyalty from '../../assests/loyalty.png';

const RewardsSection = () => {
  return (
    <section className="container mx-auto bg-secondary p-8 rounded-lg shadow-md text-center">
      <h2 className="text-4xl lg:text-5xl mb-4">
        Save with Rewards!
      </h2>
      <p className="text-lg text-muted-foreground mb-6 lg:max-w-[50%] max-w-full mx-auto">Experience fantastic savings with our Rewards Card! After your first purchase, you'll receive a special offer on every other purchase. Enjoy unique deals that enhance your shopping experience!</p>
      <Image
        src={loyalty}
        alt={'loyalty card'}
        className="object-cover w-full max-w-xl mx-auto rounded-md"
        objectFit="cover"
        loading="eager"
      />
    </section>
  );
};

export default RewardsSection;
