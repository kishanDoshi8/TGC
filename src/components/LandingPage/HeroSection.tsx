'use client';

import { useState } from 'react';
import promotion from '@/assests/Promotion.png';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center">
      <div className='absolute inset-0'>
        <Image
          src={promotion}
          alt="Delicious Sub Sandwich"
          className="shadow-md h-screen object-cover w-full"
          layout="fill"
          objectFit="cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 container mt-24 mx-auto flex justify-center lg:justify-start">
        <div className="text-center md:text-left">
          <h1 className="lg:text-8xl md:text-6xl text-4xl text-white mb-4">Fresh Subs & More</h1>
          <p className="text-lg text-white mb-8">Discover Our Delectable Menu.</p> 
          <Link href="/menu">
              <Button 
                  variant='outline'
                  className='rounded-full'
              >
                  Explore Menu
              </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
