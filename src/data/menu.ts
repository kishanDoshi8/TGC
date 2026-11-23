import type { Filling } from '@/components/SubArt';

export type Sub = {
  name: string;
  description: string;
  regularPrice: string;
  largePrice: string;
  popular?: boolean;
  /** Layers for the illustration, bottom → top. */
  fillings: Filling[];
};

export type SimpleItem = {
  name: string;
  description?: string;
  price: string;
};

export const signatureSubs: Sub[] = [
  { name: 'Butter Chicken Supreme', description: 'Grilled Chicken', regularPrice: '$14.29', largePrice: '$17.39', fillings: ['chicken', 'butterSauce'] },
  { name: 'Canadian Triplets', description: 'Turkey, Ham, and Brisket', regularPrice: '$14.29', largePrice: '$17.99', fillings: ['brisket', 'ham', 'turkey'] },
  { name: 'Spinach - Luscious', description: 'Baby Spinach', regularPrice: '$10.99', largePrice: '$13.99', fillings: ['spinach', 'spinach'] },
  { name: 'Smoked Brisket Bliss', description: 'Brisket', regularPrice: '$14.49', largePrice: '$17.49', fillings: ['brisket', 'brisket'] },
  { name: 'Triple Deli Delight', description: 'Ham, Salami, and Pepperoni', regularPrice: '$13.49', largePrice: '$16.29', popular: true, fillings: ['pepperoni', 'salami', 'ham'] },
  { name: 'Great Canadian Steak Melt', description: 'Philly Steak', regularPrice: '$13.49', largePrice: '$17.29', popular: true, fillings: ['steak', 'meltedCheese'] },
  { name: 'Meatball Pepperoni Pizza', description: 'Meatball, Pepperoni', regularPrice: '$13.99', largePrice: '$16.49', fillings: ['meatball', 'pepperoni', 'meltedCheese'] },
];

export const classicSubs: Sub[] = [
  { name: 'The Roast Beef', description: 'Roast Beef', regularPrice: '$12.49', largePrice: '$16.49', fillings: ['roastBeef', 'roastBeef'] },
  { name: 'Chicken-Bacon-Ranch', description: 'Chicken, Bacon', regularPrice: '$12.99', largePrice: '$16.99', fillings: ['chicken', 'bacon', 'ranch'] },
  { name: 'Canadian Club House', description: 'Turkey, Bacon', regularPrice: '$12.29', largePrice: '$16.99', fillings: ['bacon', 'turkey'] },
  { name: 'Classic Meatball', description: 'Meatball', regularPrice: '$11.49', largePrice: '$14.29', fillings: ['meatball'] },
  { name: 'Tender Grilled Chicken', description: 'Grilled Chicken', regularPrice: '$12.49', largePrice: '$16.29', fillings: ['chicken'] },
  { name: 'BLT', description: 'Bacon', regularPrice: '$11.49', largePrice: '$15.59', fillings: ['tomato', 'lettuce', 'bacon'] },
  { name: 'Veggieliscious', description: 'Veggie Patty', regularPrice: '$9.99', largePrice: '$12.99', fillings: ['veggiePatty'] },
  { name: 'Ham and Cheddar', description: 'Ham', regularPrice: '$11.99', largePrice: '$15.59', fillings: ['cheese', 'ham'] },
  { name: 'Truly Turkey', description: 'Turkey', regularPrice: '$11.99', largePrice: '$15.59', fillings: ['turkey', 'turkey'] },
  { name: 'Triple By-pass Club', description: 'Turkey, Ham, and Bacon', regularPrice: '$12.49', largePrice: '$16.49', popular: true, fillings: ['bacon', 'ham', 'turkey'] },
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

/** The three best sellers featured on the home page (pulled from the menu above). */
export const topPicks = [
  { title: 'Triple Deli Delight', menuName: 'Triple Deli Delight' },
  { title: 'Philly Steak Melt', menuName: 'Great Canadian Steak Melt' },
  { title: 'Triple By-pass', menuName: 'Triple By-pass Club' },
].map((p) => {
  const sub = [...signatureSubs, ...classicSubs].find((s) => s.name === p.menuName)!;
  return { ...p, price: sub.regularPrice, fillings: sub.fillings };
});

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
