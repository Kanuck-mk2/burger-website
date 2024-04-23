interface FoodItem {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string; 
}

interface Category {
  id: number;
  name: string;
  image: string;
}

export const data: FoodItem[] = [
  {
      id: 1,
      name: 'Double Cheeseburger',
      category: 'burger',
      image: '/food-item/dcburger1.jpg',
      price: '$',
  },
  {
      id: 2,
      name: 'Mushroom burger',
      category: 'burger',
      image: '/food-item/mburger1.jpg',
      price: '$',
  },
  {
      id: 3,
      name: 'California burger',
      category: 'burger',
      image: '/food-item/cburger1.jpg',
      price: '$$',
  },
  {
      id: 4,
      name: 'Triple Threat Combo',
      category: 'burger',
      image: '/food-item/3burger.jpg',
      price: '$$$$',
  },
  {
      id: 5,
      name: 'Hot Dog',
      category: 'hot dogs',
      image: '/food-item/hotdog.webp',
      price: '$',
  },
  {
      id: 6,
      name: "Mac'n Cheese Dog",
      category: 'hot dogs',
      image: '/food-item/hotdog5.jpg',
      price: '$',
  },
  {
      id: 7,
      name: 'Chili Dog',
      category: 'hot dogs',
      image: '/food-item/hotdog3.jpg',
      price: '$$',
  },
  {
      id: 8,
      name: 'Garlic Fries',
      category: 'fries',
      image: '/food-item/fries.webp',
      price: '$',
  },
  {
      id: 9,
      name: 'Three Cheese Fries',
      category: 'fries',
      image: '/food-item/cfries1.jpg',
      price: '$',
  },
  {
      id: 10,
      name: 'Chili Cheese Fries',
      category: 'fries',
      image: '/food-item/fries3.jpg',
      price: '$$',
  },
  {
      id: 11,
      name: 'Choco O Shake',
      category: 'drinks',
      image: '/food-item/shake1.jpg',
      price: '$$',
  },
  {
      id: 12,
      name: 'Strawberry Shortcake Shake',
      category: 'drinks',
      image: '/food-item/shake2.jpg',
      price: '$$',
  },
  {
      id: 13,
      name: "Peach Fizz 'n Pop",
      category: 'drinks',
      image: '/food-item/peachd.jpg',
      price: '$$',
  },
];

export const categories: Category[] = [
  {
      id: 1,
      name: 'Locations',
      image: '/food-item/burger1.jpg',
  },
  {
      id: 2,
      name: 'Pizza Avenue',
      image: '/food-item/burger1.jpg',
  },
  {
      id: 3,
      name: 'Careers',
      image: '/food-item/burger1.jpg',
  },
  {
      id: 4,
      name: 'Coming Soon!',
      image: '/food-item/burger1.jpg',
  },
];
