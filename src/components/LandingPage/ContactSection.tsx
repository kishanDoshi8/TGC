'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Icons } from '../icons';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import store from '@/assests/store.png';
import logo from '@/assests/back.png';

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="container mx-auto p-4 bg-white"
    >
    <section className="container mx-auto p-4">
      <h2 className="text-4xl lg:text-5xl mb-12 text-center">
        TGC SUBS & CONVENIENCE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative max-w-xl mx-auto h-[400px]">
          <Image
            src={logo}
            alt="logo"
            className="absolute -top-5 -left-5 object-cover -rotate-12"
            objectFit="cover"
            loading="eager"
            height={80}
            width={80}
          />
          <Image
            src={store}
            alt={'Store'}
            className="object-cover w-auto h-full rounded-md"
            objectFit="cover"
            loading="eager"
          />
        </div>
        <div className="flex gap-8 mx-auto pt-12">
          <div className="mt-auto">
            <div className='mt-auto mb-4 flex gap-4'>
              <Link href='https://www.facebook.com/share/1NJhN78qpi/' target='_blank'>
                <Icons.facebook className='w-6 h-6 hover:text-primary' />
              </Link>
              {/* <Icons.instagram className='w-6 h-6' />
              <Icons.twitter className='w-6 h-6' /> */}
            </div>
            <p>+1 613-392-8349</p>
            <p>tgcsubsandc@gmail.com</p>
            <p className='mt-4'>210 Front St, Quinte West,</p>
            <p>ON K8V 4N9,</p>
            <p>Canada</p>
          </div>
          <div className="max-w-[200px] mt-auto">
            <p>&copy; 2025 TGC SUBS & CONVENIENCE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
    </motion.section>
  );
};

export default ContactSection;
