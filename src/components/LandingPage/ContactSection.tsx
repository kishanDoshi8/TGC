
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import React from 'react';

const ContactSection = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg text-muted-foreground mb-4">
            Have a question or comment? We'd love to hear from you! Fill out
            the form below to get in touch with our team.
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button>Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
