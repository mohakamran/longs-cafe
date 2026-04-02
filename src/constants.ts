export interface Drink {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: string;
  category: 'coffee' | 'matcha';
  image: string;
}

export const DRINKS: Drink[] = [
  {
    id: '1',
    name: 'Ceremonial Grade Matcha',
    description: 'Pure, stone-ground Uji matcha whisked to perfection in our lab.',
    ingredients: ['Ceremonial Grade Matcha', 'Hot Water'],
    price: '$6.50',
    category: 'matcha',
    image: 'https://teasetea.com/cdn/shop/files/tease-tea-green-tea-wellness-biodegradable-tea-matcha-japanese-organic-ceremonial-matcha-organic-ceremonial-matcha-tease-tea-38839032840248_1800x1800.png?v=1773154716',
  },
  {
    id: '2',
    name: 'Strawberry Matcha Fusion',
    description: 'Layered matcha with fresh strawberry purée and creamy milk.',
    ingredients: ['Matcha', 'Strawberry Purée', 'Milk', 'Ice'],
    price: '$7.25',
    category: 'matcha',
    image: 'https://www.cookingwithnart.com/wp-content/uploads/2025/04/Strawberry-Matcha-Latte-Cooking-with-Nart.jpg',
  },
  {
    id: '3',
    name: 'Dark Chocolate Matcha',
    description: 'Rich, velvety dark chocolate blended with our signature matcha.',
    ingredients: ['Matcha', 'Dark Chocolate', 'Steamed Milk'],
    price: '$6.75',
    category: 'matcha',
    image: 'https://shutterandmint.com/wp-content/uploads/2026/01/Iced-Dubai-Chocolate-Matcha-Hero-Image.jpg',
  },
  {
    id: '4',
    name: 'Caramel Matcha Cloud',
    description: 'Matcha topped with cold foam and house-made caramel drizzle.',
    ingredients: ['Matcha', 'Cold Foam', 'Caramel Drizzle'],
    price: '$6.25',
    category: 'matcha',
    image: 'https://tenzotea.co/cdn/shop/articles/Caramel_Matcha.png?v=1723483761',
  },
  {
    id: '5',
    name: 'Hojicha Matcha Blend',
    description: 'Roasted green tea with a nutty, smoky flavor profile.',
    ingredients: ['Hojicha Powder', 'Matcha', 'Steamed Milk'],
    price: '$6.00',
    category: 'matcha',
    image: 'https://hojicha.co/cdn/shop/articles/matcha_hojicha_fusion_latte.jpeg?v=1599510074',
  },
  {
    id: '6',
    name: 'Black Sesame Matcha',
    description: 'Rich, toasted black sesame paste blended with creamy matcha.',
    ingredients: ['Black Sesame Paste', 'Matcha', 'Maple Syrup'],
    price: '$6.50',
    category: 'matcha',
    image: 'https://int.japanesetaste.com/cdn/shop/files/Black_Sesame_Matcha_Latte_step5.jpg?crop=center&height=3024&v=1713861568&width=3024',
  },
  {
    id: '7',
    name: 'Yuzu Matcha Tonic',
    description: 'Refreshing blend of matcha, yuzu juice, and tonic water.',
    ingredients: ['Matcha', 'Yuzu Juice', 'Tonic Water', 'Ice'],
    price: '$6.75',
    category: 'matcha',
    image: 'https://cdn.shopify.com/s/files/1/0655/4550/2972/files/blog_matcha-recipe-cocktail.jpg?v=1751687967',
  },
  {
    id: '8',
    name: 'White Chocolate Matcha',
    description: 'Creamy white chocolate and matcha for a sweet, balanced treat.',
    ingredients: ['Matcha', 'White Chocolate', 'Steamed Milk'],
    price: '$6.50',
    category: 'matcha',
    image: 'https://bromabakery.com/wp-content/uploads/2019/03/Iced-White-Chocolate-Matcha-Latte-3.jpg',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Elena Vance',
    role: 'Engineering Student',
    content: 'The Strawberry Matcha is my daily fuel for lab work. It’s so refreshing and aesthetic!',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
  {
    id: 2,
    name: 'Kenji Sato',
    role: 'Research Assistant',
    content: 'I love that this started as a lab project. The quality of the ceremonial matcha is incredible.',
    avatar: 'https://i.pravatar.cc/150?u=kenji',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Graduate Student',
    content: 'The best spot on campus to relax between lectures. The chocolate matcha is a game changer.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
];
