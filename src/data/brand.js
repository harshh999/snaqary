// Snaqary Brand Story, Process, Testimonials, and Configuration

export const BRAND_INFO = {
  name: 'Snaqary',
  tagline: 'Snack better. Feel better.',
  eyebrow: 'Better snacking, simply.',
  heroSupportingText: 'Thoughtfully crafted Indian snacks made for everyday cravings — with better ingredients and less of the unnecessary stuff.',
  location: {
    city: 'Mumbai',
    region: 'Maharashtra, India',
    studio: 'Unit 402, The Design Loft, Lower Parel, Mumbai 400013',
    kitchen: 'Artisanal Roasting Lab, Bhandup Industrial Area, Mumbai',
    email: 'hello@snaqary.com',
    press: 'press@snaqary.com',
    phone: '+91 98201 54321',
    hours: 'Mon — Fri: 10:00 AM — 7:00 PM IST',
  },
  social: [
    { name: 'Instagram', handle: '@snaqary.snacks', url: 'https://instagram.com' },
    { name: 'Twitter/X', handle: '@snaqary', url: 'https://twitter.com' },
    { name: 'LinkedIn', handle: 'Snaqary FMCG', url: 'https://linkedin.com' },
  ]
};

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Thoughtful ingredients',
    description: 'We start with ingredients chosen with everyday snacking in mind — whole millets, cold-pressed oils, and sun-dried spices.',
    iconType: 'grain',
  },
  {
    number: '02',
    title: 'Carefully crafted',
    description: 'Each snack is prepared with attention to texture, flavour, and quality on heavy cast-iron plates without rushing the roast.',
    iconType: 'flame',
  },
  {
    number: '03',
    title: 'Less unnecessary stuff',
    description: 'We keep palm oil, artificial colors, excess sodium, and synthetic preservatives out of our pantry entirely.',
    iconType: 'pure',
  },
  {
    number: '04',
    title: 'Ready to crunch',
    description: 'Freshly packed in oxygen-barrier recyclable pouches and delivered to your doorstep at peak crispiness.',
    iconType: 'package',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Finally a khakhra brand that doesn't feel stuck in 1995. The Roasted Bajra with the dips is my daily 4 PM ritual.",
    author: "Pooja Mehta",
    city: "Bandra, Mumbai",
    rating: 5,
    tag: "Verified Snacker",
  },
  {
    id: 2,
    quote: "The Stuffed Khakhra with Date Cocoa is ridiculous. Tastes like a dessert without the sugar crash afterwards.",
    author: "Kabir Sharma",
    city: "Indiranagar, Bengaluru",
    rating: 5,
    tag: "Subscriber",
  },
  {
    id: 3,
    quote: "Zero palm oil, clean ingredient list, and they actually stay crispy for weeks. My desk drawer is strictly Snaqary now.",
    author: "Ananya Roy",
    city: "Gurugram, NCR",
    rating: 5,
    tag: "Verified Snacker",
  },
  {
    id: 4,
    quote: "The Pav Bhaji khakhra has that distinct Mumbai street aroma without being overly greasy. Outstanding execution.",
    author: "Siddharth Trivedi",
    city: "South Mumbai",
    rating: 5,
    tag: "Verified Snacker",
  },
  {
    id: 5,
    quote: "Got the free ceramic plate with my ₹500 order — it’s actually gorgeous stoneware, not cheap plastic merch. 10/10.",
    author: "Meera Venkatesh",
    city: "Jubilee Hills, Hyderabad",
    rating: 5,
    tag: "Collector",
  },
  {
    id: 6,
    quote: "Light, airy jowar puffs that satisfy chip cravings without that heavy sluggish feeling afterwards. Obsessed.",
    author: "Arjun Kapoor",
    city: "Koregaon Park, Pune",
    rating: 5,
    tag: "Verified Snacker",
  },
];

export const GOODIE_REWARD = {
  threshold: 500,
  rewardName: 'Snaqary Handcrafted Ceramic Plate',
  value: 399,
  image: '/images/ceramic_plate.jpg',
  description: 'A bespoke off-white stoneware snack plate with organic raw edges and debossed Snaqary insignia. Crafted in collaboration with independent Indian ceramicists.',
  messageBelow: (remaining) => `Add ₹${remaining} more to unlock your free Snaqary ceramic plate.`,
  messageAbove: 'Your free handcrafted Snaqary ceramic plate is included in this order!',
};
