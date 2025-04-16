
import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src="https://picsum.photos/600/400"
          alt="SubStop Express Team"
          className="rounded-lg shadow-md object-cover h-full w-full"
        />
        <div>
          <p className="text-lg text-muted-foreground mb-4">
            SubStop Express was founded with a simple mission: to provide fresh,
            delicious, and affordable sub sandwiches to our community.
          </p>
          <p className="text-lg text-muted-foreground">
            We are passionate about using high-quality ingredients and providing
            exceptional service. Our team is dedicated to making your experience
            at SubStop Express a memorable one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
