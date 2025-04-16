
import React from 'react';

const HeroSection = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center p-4">
      <img
        src="https://picsum.photos/1200/400"
        alt="Delicious Sub Sandwich"
        className="rounded-lg shadow-md"
      />
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to SubStop Express! Your go-to spot for subs.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Fresh ingredients, fast service, and a taste you'll crave.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
