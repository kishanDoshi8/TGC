
import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-4xl lg:text-5xl mb-4 text-center">
        Get to Know Us Better
      </h2>
      <p className="text-lg text-muted-foreground mb-6 lg:max-w-[50%] max-w-full mx-auto">
        TGC Subs & Convenience, located in Trenton, Canada, is dedicated to providing top-notch subs and sandwiches while also running a convenient store. Our goal is to serve the best quality food along with a variety of everyday essentials, all backed by exceptional customer service. Come visit us for a delicious meal and all your convenience needs!
      </p>
      <hr className="lg:max-w-[50%] max-w-full mx-auto"/>
      <p className="text-right text-muted-foreground mb-6 lg:max-w-[50%] max-w-full mx-auto mt-8">
        🎉 Don’t miss out on our exclusive seasonal and holiday offers! We regularly post special deals, limited-time promotions, and updates on our <a href='https://www.facebook.com/share/1NJhN78qpi/' target='_blank' className='text-primary underline underline-offset-2'>Facebook page</a>. Follow us to stay in the loop and be the first to grab our latest offers!
      </p>
      
    </section>
  );
};

export default AboutUsSection;
