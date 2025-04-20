
import { ContactSection } from '@/components/LandingPage';
import Navbar from '@/components/Navbar';
import React from 'react';

const MenuPage = () => {
  const signatureSubs = [
    {
      name: 'Butter Chiken Supreme',
      description: 'Grilled Chicken',
      regularPrice: '$14.29',
      largePrice: '$17.39',
    },
    {
      name: 'Canadian Triplets',
      description: 'Turkey, Ham, and Brisket',
      regularPrice: '$14.29',
      largePrice: '$17.99',
    },
    {
      name: 'Spinach - Luscious',
      description: 'Baby Spinach',
      regularPrice: '$10.99',
      largePrice: '$13.99',
    },
    {
      name: 'Smoked Brisket Bliss',
      description: 'Brisket',
      regularPrice: '$14.49',
      largePrice: '$17.49',
    },
    {
      name: 'Triple Deli Delight',
      description: 'Ham, Salami, and Pepperoni',
      regularPrice: '$13.49',
      largePrice: '$16.29',
    },
    {
      name: 'Great Canadian Steak Melt',
      description: 'Philly Steak',
      regularPrice: '$13.49',
      largePrice: '$17.29',
    },
    {
      name: 'Meatball Pepperoni Pizza',
      description: 'Meatball, Pepperoni',
      regularPrice: '$13.99',
      largePrice: '$16.49',
    },
  ];

  const classicSubs = [
    {
      name: 'The Roast Beef',
      description: 'Roast Beef',
      regularPrice: '$12.49',
      largePrice: '$16.49',
    },
    {
      name: 'Chicken-Bacon-Ranch',
      description: 'Chicken, Bacon',
      regularPrice: '$12.99',
      largePrice: '$16.99',
    },
    {
      name: 'Canadian Club House',
      description: 'Turkey, Bacon',
      regularPrice: '$12.29',
      largePrice: '$16.99',
    },
    {
      name: 'Classic Meatball',
      description: 'Meatball',
      regularPrice: '$11.49',
      largePrice: '$14.29',
    },
    {
      name: 'Tender Grilled Chicken',
      description: 'Grilled Chicken',
      regularPrice: '$12.49',
      largePrice: '$16.29',
    },
    {
      name: 'BLT',
      description: 'Bacon',
      regularPrice: '$11.49',
      largePrice: '$15.59',
    },
    {
      name: 'Veggieliscioous',
      description: 'Veggie Patty',
      regularPrice: '$9.99',
      largePrice: '$12.99',
    },
    {
      name: 'Ham and Cheddar',
      description: 'Ham',
      regularPrice: '$11.99',
      largePrice: '$15.59',
    },
    {
      name: 'Truly Turkey',
      description: 'Turkey',
      regularPrice: '$11.99',
      largePrice: '$15.59',
    },
    {
      name: 'Triple By-pass Club',
      description: 'Turkey, Ham, and Bacon',
      regularPrice: '$12.49',
      largePrice: '$16.49',
    },
  ];

  const salads = [
    {
      name: 'Veggie Salad Bowl',
      description: 'Veggies',
      price: '$11.99',
    },
    {
      name: 'Protein Salad Bowl',
      description: 'Turkey / Ham / Chicken',
      price: '$14.49',
    },
    {
      name: `TGC's Vegetarian Soup`,
      price: '$5.49',
    },
    {
      name: `TGC's Protein Soup`,
      price: '$5.49',
    },
  ];

  const kidsMenu = [
    {
      name: 'Meatball Combo',
      description: 'Meatballs',
      price: '$6.49',
    },
    {
      name: 'Turkey Combo',
      description: 'Turkey',
      price: '$6.99',
    },
    {
      name: 'Ham Combo',
      description: 'Ham',
      price: '$6.49',
    }
  ];

  const createYourOwn = [
    'Ham and Cheese',
    'Turkey and Cheese',
    'Roast Beef and Cheese',
    'Ham and Turkey',
    'Ham, Salami, and Pepperoni',
    'Veggieliscious',
    'Spinachliscious',
  ];

  return (
    <>
      <Navbar />
      <div className="bg-primary">
        <div className="container text-primary-foreground mx-auto p-4 pt-12">
          <h1 className="text-4xl lg:text-5xl mb-4">
            Subs Menu
          </h1>
          <div className="flex gap-12 flex-col md:flex-row">
            <div className="flex-1 px-8">
              {/* Signature subs */}
              <h3 className='my-4 text-2xl font-bold'>Signature Subs</h3>
              <ul>
                {signatureSubs.map((sub, index) => (
                  <li className="mb-6">
                    <hr className='opacity-50' />
                    <h4 className="mt-6 text-lg">{sub.name}</h4>
                    <p className="text-sm italic mb-4">{sub.description}</p>
                    <p className="flex justify-between">
                      <span>Regular</span>
                      <span>{sub.regularPrice}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Large</span>
                      <span>{sub.largePrice}</span>
                    </p>
                  </li>
                ))}
              </ul>
              {/* Classic subs */}
              <h3 className='mb-4 mt-8 text-2xl font-bold'>Classic Subs</h3>
              <ul>
                {classicSubs.map((sub, index) => (
                  <li className="mb-6">
                    <hr className='opacity-50' />
                    <h4 className="mt-6 text-lg">{sub.name}</h4>
                    <p className="text-sm italic mb-4">{sub.description}</p>
                    <p className="flex justify-between">
                      <span>Regular</span>
                      <span>{sub.regularPrice}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Large</span>
                      <span>{sub.largePrice}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 px-8">
              {/* Salads */}
              <h3 className='my-4 text-2xl font-bold'>Salads and Soups</h3>
              {salads.map((salad, index) => (
                <div key={index} className="mb-6">
                  <hr className='opacity-50' />
                  <h4 className="mt-6 text-lg">{salad.name}</h4>
                  <p className="text-sm italic mb-4">{salad.description}</p>
                  <p className="flex justify-between">
                    <span>Price</span>
                    <span>{salad.price}</span>
                  </p>
                </div>
              ))}
              {/* Kids Menu */}
              <h3 className='mb-4 mt-8 text-2xl font-bold'>Kids Menu</h3>
              {kidsMenu.map((item, index) => (
                <div key={index} className="mb-6">
                  <hr className='opacity-50' />
                  <h4 className="mt-6 text-lg">{item.name}</h4>
                  <p className="text-sm italic mb-4">{item.description}</p>
                  <p className="flex justify-between">
                    <span>Price</span>
                    <span>{item.price}</span>
                  </p>
                </div>
              ))}
              {/* Create Your Own */}
              <h3 className='mb-2 mt-8 text-2xl font-bold'>TGC Platter</h3>
              <hr className="opacity-50" />
              <h4 className="mt-6 text-lg">Create Your Own Platter ($60)</h4>
              <p className="text-sm italic mb-4">Choose any 5 subs from our delicious selection of 7 specially curated options</p>
              {createYourOwn.map((item, index) => (
                <div key={index} className="mb-6">
                  <h4 className="mt-6 text-lg">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <ContactSection />
    </>
  );
};

export default MenuPage;
