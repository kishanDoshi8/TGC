
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-secondary py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          SubStop Express
        </Link>
        <div className="space-x-4">
          <Link href="/menu">
            <Button variant="outline">Menu</Button>
          </Link>
          <Button>Order Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
