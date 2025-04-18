'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Icons } from '../icons';

const ContactSection = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-4xl lg:text-5xl mb-4 text-center">
        TGC SUBS & CONVENIENCE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="grid grid-cols-2 gap-4 bg-secondary p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <p className="text-4xl col-span-full text-primary">Get a quote for your event</p>
          <div>
            <label htmlFor='firstName' className='text-sm text-muted-foreground'>First Name</label>
            <Input id='firstName' type="text" />
          </div>
          <div>
            <label htmlFor='lastName' className='text-sm text-muted-foreground'>Last Name</label>
            <Input id='lastName' type="text" />
          </div>
          <div>
            <label htmlFor='email' className='text-sm text-muted-foreground'>Email</label>
            <Input id='email' type="email" />
          </div>
          <div>
            <label htmlFor='phone' className='text-sm text-muted-foreground'>Phone</label>
            <Input id='phone' type="text" />
          </div>
          <div>
            <label htmlFor='occasion' className='text-sm text-muted-foreground'>What's the occasion?</label>
            <Input id='occasion' type="text" />
          </div>
          <div>
            <label htmlFor='guests' className='text-sm text-muted-foreground'>Number of guests</label>
            <Input id='guests' type="number" />
          </div>
           <div className="col-span-2 flex flex-col">
              <label htmlFor="event" className="text-sm text-muted-foreground">When's the event?</label>
              <DatePicker
                id="event"
                className={cn(
                  "mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                )}
                />
            </div>
          <Button className="col-span-2">Submit</Button>
        </form>
        <div className="flex gap-8 mx-auto">
          <div className="mt-auto">
            <div className='mt-auto mb-4 flex gap-4'>
              <Icons.facebook className='w-6 h-6' />
              <Icons.instagram className='w-6 h-6' />
              <Icons.twitter className='w-6 h-6' />
            </div>
            <p>+1 613-392-8349</p>
            <p>info@tgcsubs.com</p>
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
  );
};

export default ContactSection;
