/**
 * Lake Cookhouse - Website Configuration & Data
 * All placeholders are centralized here for easy customization by the restaurant owner.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'grills' | 'seafood' | 'desserts' | 'drinks';
  description: string;
  price: string; // Placeholder "M XX" as requested
  image: string;
  badge?: string;
  dietary?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  title: string;
  rating: number;
  review: string; // Clearly marked placeholder
  date: string;
}

export const RESTAURANT_CONFIG = {
  name: "Lake Cookhouse",
  tagline: "Good Food. Great Views. Unforgettable Moments.",
  subtitle: "Quality Food - Quality Time",
  heroDescription: "Experience delicious food, refreshing drinks and warm hospitality in a beautiful lakeside setting.",

  // Contact Placeholders (strictly as requested: no invented phone/address/hours)
  contact: {
    addressPlaceholder: "[Restaurant address will appear here once confirmed]",
    phonePlaceholder: "[Contact phone number placeholder]",
    emailPlaceholder: "[Contact email address placeholder]",
    hoursPlaceholder: "[Opening hours placeholder e.g. Mon – Sun: 11:00 AM – 10:00 PM]",
  },

  // Social Links
  social: {
    // Official Facebook page provided by user
    facebookUrl: "https://web.facebook.com/p/Lake-Cookhouse-61587926143024/?_rdc=1&_rdr#",
    // WhatsApp number placeholder (easily editable)
    whatsappNumber: "REPLACE_WITH_RESTAURANT_NUMBER",
    instagramUrl: "https://instagram.com/lakecookhouse_placeholder",
  },

  // Reservation Settings
  reservations: {
    availableTimeSlots: [
      '12:00',
      '13:00',
      '14:00',
      '17:30',
      '18:30',
      '19:30',
      '20:30',
    ],
    seatingAreas: [
      'Lakeside Deck (Panoramic Water View)',
      'Sunset Terrace (Open Air)',
      'Main Dining Hall (Warm Ambience)',
      'Private Gazebo / Group Pergola',
    ],
    maxGuestsPerOnlineBooking: 12,
  },

  // Currency placeholder prefix (Lesotho Maloti: M)
  currencySymbol: "M ",
};

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Dishes' },
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Main Courses' },
  { id: 'grills', label: 'Grills' },
  { id: 'seafood', label: 'Seafood' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'dish-1',
    name: 'Pan-Seared Lake Salmon Fillet',
    category: 'seafood',
    description: 'Crisp skin wild salmon served on buttery potato puree, roasted seasonal asparagus, and zesty lemon dill reduction.',
    price: 'M XX',
    image: '/src/assets/images/dish_grilled_salmon_plate_1790313133217.jpg',
    badge: "Chef's Signature",
    dietary: ['Gluten-Free', 'Omega-Rich'],
  },
  {
    id: 'dish-2',
    name: 'Char-Grilled Prime Ribeye Steak',
    category: 'grills',
    description: 'Aged prime beef cut flame-grilled to perfection, roasted garlic herb butter, glazed heirloom carrots and rich jus.',
    price: 'M XX',
    image: '/src/assets/images/dish_ribeye_steak_rustic_1790313143038.jpg',
    badge: 'Wood-Fired Grill',
    dietary: ['Signature Cut'],
  },
  {
    id: 'dish-3',
    name: 'Artisan Lakeside Mezze Platter',
    category: 'starters',
    description: 'Handcrafted dips, warm stone-baked flatbread, marinated olives, grilled halloumi and fresh lake herbs.',
    price: 'M XX',
    image: '/src/assets/images/about_restaurant_terrace_1790313122215.jpg',
    badge: 'Ideal For Sharing',
    dietary: ['Vegetarian Friendly'],
  },
  {
    id: 'dish-4',
    name: 'Slow-Roasted Lakeview Herb Lamb',
    category: 'mains',
    description: 'Tender braised lamb shank infused with rosemary and thyme, creamy polenta, and roasted vineyard vegetables.',
    price: 'M XX',
    image: '/src/assets/images/dish_ribeye_steak_rustic_1790313143038.jpg',
    badge: 'House Specialty',
    dietary: ['Slow Cooked'],
  },
  {
    id: 'dish-5',
    name: 'Crispy Garlic Butter Lake Prawns',
    category: 'seafood',
    description: 'Succulent jumbo prawns grilled over flame with lemon garlic butter, fresh parsley, and toasted sourdough.',
    price: 'M XX',
    image: '/src/assets/images/dish_grilled_salmon_plate_1790313133217.jpg',
    badge: 'Fresh Catch',
    dietary: ['Seafood Lover'],
  },
  {
    id: 'dish-6',
    name: 'Flame-Kissed BBQ Tenderloins',
    category: 'grills',
    description: 'Smoked and glazed with our signature Cookhouse basting sauce, charred sweet corn, and hand-cut herb wedges.',
    price: 'M XX',
    image: '/src/assets/images/hero_lakeside_dining_1790313110806.jpg',
    badge: 'Popular',
    dietary: ['Flame Grilled'],
  },
  {
    id: 'dish-7',
    name: 'Decadent Dark Chocolate Molten Lava',
    category: 'desserts',
    description: 'Warm Belgian chocolate cake with a molten center, paired with Madagascan vanilla bean gelato and berry coulis.',
    price: 'M XX',
    image: '/src/assets/images/experience_sunset_celebration_1790313154745.jpg',
    badge: 'Sweet Finale',
    dietary: ['House Dessert'],
  },
  {
    id: 'dish-8',
    name: 'Lake Sunset Botanist Spritz',
    category: 'drinks',
    description: 'Handcrafted craft botanical infusion, elderflower tonic, fresh cucumber ribbon, and citrus lake mist.',
    price: 'M XX',
    image: '/src/assets/images/experience_sunset_celebration_1790313154745.jpg',
    badge: 'Signature Cocktail',
    dietary: ['Refreshing'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Lake Cookhouse Outdoor Dining Terrace',
    category: 'Exterior',
    image: '/bg.jpg',
    description: 'The authentic Lake Cookhouse dining patio with yellow sun umbrellas, white dining chairs, and welcoming patrons enjoying food and drinks.',
  },
  {
    id: 'gal-2',
    title: 'Sunny Afternoon on the Terrace',
    category: 'Exterior',
    image: '/patio.jpg',
    description: 'Guests gathering on the elevated outdoor concrete patio deck with views of the expansive sky and surroundings.',
  },
  {
    id: 'gal-3',
    title: 'Signature Lake Salmon Dish',
    category: 'Signature Dishes',
    image: '/src/assets/images/dish_grilled_salmon_plate_1790313133217.jpg',
    description: 'Artisanal pan-seared salmon with garden asparagus and citrus foam.',
  },
  {
    id: 'gal-4',
    title: 'Prime Flame-Grilled Steak Cut',
    category: 'Signature Dishes',
    image: '/src/assets/images/dish_ribeye_steak_rustic_1790313143038.jpg',
    description: 'Juicy ribeye steak with roasted garlic herb butter and rich glaze.',
  },
  {
    id: 'gal-5',
    title: 'Golden Hour Lakeside Dining Table',
    category: 'Lakeside View',
    image: '/src/assets/images/hero_lakeside_dining_1790313110806.jpg',
    description: 'Sunlit rustic timber table dressed with fine wine and gourmet platters as sunset approaches.',
  },
  {
    id: 'gal-6',
    title: 'Evening Atmosphere & Twilight Deck',
    category: 'Evening Atmosphere',
    image: '/src/assets/images/experience_sunset_celebration_1790313154745.jpg',
    description: 'Warm festoon lighting and candle glow casting golden reflections on the calm lake surface.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Customer Name Placeholder 1',
    title: 'Lakeside Visitor',
    rating: 5,
    review: 'Add customer testimonial here.',
    date: 'Recent Guest Review',
  },
  {
    id: 'test-2',
    author: 'Customer Name Placeholder 2',
    title: 'Special Event Host',
    rating: 5,
    review: 'Add customer testimonial here.',
    date: 'Recent Guest Review',
  },
  {
    id: 'test-3',
    author: 'Customer Name Placeholder 3',
    title: 'Family Gathering',
    rating: 5,
    review: 'Add customer testimonial here.',
    date: 'Recent Guest Review',
  },
];
