'use client';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

import { motion, useScroll } from 'framer-motion';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <nav className="bg-secondary p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl">
        <div className="w-[200px] leading-tight">
          <span className="block">TGC Subs &</span>
          <span className="block">Convenience</span>
        </div>
        </Link>
        <div className="flex gap-4 flex-col md:flex-row">
          <Link href="/">
            <Button variant={'ghost'}>Home</Button>
          </Link>
          <Link href="/menu">
            <Button>Menu</Button>
          </Link>
        </div>
      </div>
            
      <motion.div
        id="scroll-indicator"
        style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            originX: 0,
            backgroundColor: "#C9222B",
        }}
      />
    </nav>
  );
};

export default Navbar;
