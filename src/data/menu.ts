import type { StaticImageData } from 'next/image';
import deli from '@/assests/Triple Deli Delight.jpg';
import steak from '@/assests/Philly Steak Melt.jpg';
import byPass from '@/assests/Triple By-pass.jpg';

export type Sub = {
  name: string;
  description: string;
  regularPrice: string;
  largePrice: string;
  popular?: boolean;
  image?: StaticImageData;
};

export type SimpleItem = {
  name: string;
  description?: string;
  price: string;
};

export const signatureSubs: Sub[] = [
  { name: 'Butter Chicken Supreme', description: 'Grilled Chicken', regularPrice: '$14.29', largePrice: '$17.39' },
  { name: 'Canadian Triplets', description: 'Turkey, Ham, and Brisket', regularPrice: '$14.29', largePrice: '$17.99' },
  { name: 'Spinach - Luscious', description: 'Baby Spinach', regularPrice: '$10.99', largePrice: '$13.99' },
  { name: 'Smoked Brisket Bliss', description: 'Brisket', regularPrice: '$14.49', largePrice: '$17.49' },
  { name: 'Triple Deli Delight', description: 'Ham, Salami, and Pepperoni', regularPrice: '$13.49', largePrice: '$16.29', popular: true, image: deli },
  { name: 'Great Canadian Steak Melt', description: 'Philly Steak', regularPrice: '$13.49', largePrice: '$17.29', popular: true, image: steak },
  { name: 'Meatball Pepperoni Pizza', description: 'Meatball, Pepperoni', regularPrice: '$13.99', largePrice: '$16.49' },
];

export const classicSubs: Sub[] = [
  { name: 'The Roast Beef', description: 'Roast Beef', regularPrice: '$12.49', largePrice: '$16.49' },
  { name: 'Chicken-Bacon-Ranch', description: 'Chicken, Bacon', regularPrice: '$12.99', largePrice: '$16.99' },
  { name: 'Canadian Club House', description: 'Turkey, Bacon', regularPrice: '$12.29', largePrice: '$16.99' },
  { name: 'Classic Meatball', description: 'Meatball', regularPrice: '$11.49', largePrice: '$14.29' },
  { name: 'Tender Grilled Chicken', description: 'Grilled Chicken', regularPrice: '$12.49', largePrice: '$16.29' },
  { name: 'BLT', description: 'Bacon', regularPrice: '$11.49', largePrice: '$15.59' },
  { name: 'Veggieliscious', description: 'Veggie Patty', regularPrice: '$9.99', largePrice: '$12.99' },
  { name: 'Ham and Cheddar', description: 'Ham', regularPrice: '$11.99', largePrice: '$15.59' },
  { name: 'Truly Turkey', description: 'Turkey', regularPrice: '$11.99', largePrice: '$15.59' },
  { name: 'Triple By-pass Club', description: 'Turkey, Ham, and Bacon', regularPrice: '$12.49', largePrice: '$16.49', popular: true, image: byPass },
];

export const saladsAndSoups: SimpleItem[] = [
  { name: 'Veggie Salad Bowl', description: 'Veggies', price: '$11.99' },
  { name: 'Protein Salad Bowl', description: 'Turkey / Ham / Chicken', price: '$14.49' },
  { name: `TGC's Vegetarian Soup`, price: '$5.49' },
  { name: `TGC's Protein Soup`, price: '$5.49' },
];

export const kidsMenu: SimpleItem[] = [
  { name: 'Meatball Combo', description: 'Meatballs', price: '$6.49' },
  { name: 'Turkey Combo', description: 'Turkey', price: '$6.99' },
  { name: 'Ham Combo', description: 'Ham', price: '$6.49' },
];

export const platter = {
  name: 'Create Your Own Platter',
  price: '$60',
  description: 'Choose any 5 subs from our delicious selection of 7 specially curated options',
  options: [
    'Ham and Cheese',
    'Turkey and Cheese',
    'Roast Beef and Cheese',
    'Ham and Turkey',
    'Ham, Salami, and Pepperoni',
    'Veggieliscious',
    'Spinachliscious',
  ],
};

/** The three best sellers featured on the home page. */
export const topPicks = [
  { title: 'Triple Deli Delight', menuName: 'Triple Deli Delight', price: '$13.49', blurb: 'Ham, salami & pepperoni stacked high.', image: deli },
  { title: 'Philly Steak Melt', menuName: 'Great Canadian Steak Melt', price: '$13.49', blurb: 'Sizzling Philly steak, melty cheese.', image: steak },
  { title: 'Triple By-pass', menuName: 'Triple By-pass Club', price: '$12.49', blurb: 'Turkey, ham & bacon — the full club.', image: byPass },
];

export const store = {
  name: 'TGC Subs & Convenience',
  phone: '+1 613-392-8349',
  phoneHref: 'tel:+16133928349',
  email: 'tgcsubsandc@gmail.com',
  addressLines: ['210 Front St, Quinte West,', 'ON K8V 4N9, Canada'],
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=210+Front+St,+Quinte+West,+ON+K8V+4N9',
  facebook: 'https://www.facebook.com/share/1NJhN78qpi/',
};

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
