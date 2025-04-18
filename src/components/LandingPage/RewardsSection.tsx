
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Image from 'next/image';
import loyalty from '../../assests/loyalty.png'
import React from 'react';

const RewardsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto bg-secondary p-8 rounded-lg shadow-md text-center"
    >
      <h2 className="text-4xl lg:text-5xl mb-4">Save with Rewards!</h2>
      <p className="text-lg text-muted-foreground mb-6 lg:max-w-[50%] max-w-full mx-auto">
        Experience fantastic savings with our Rewards Card! After your first
        purchase, you'll receive a special offer on every other purchase. Enjoy
        unique deals that enhance your shopping experience!
      </p>
      <Image src={loyalty} alt={'loyalty card'} className="object-cover w-full max-w-xl mx-auto rounded-md" objectFit="cover" loading="eager" />
    </motion.section>
  );
};

export default RewardsSection;
