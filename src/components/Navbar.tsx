
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-secondary p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl">
          TGC Subs & Convenience
        </Link>
        <div className="space-x-4">
          <Link href="/">
            <Button variant={'ghost'}>Home</Button>
          </Link>
          <Link href="/menu">
            <Button>Menu</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
