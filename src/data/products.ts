import { Product } from '@/types';
import earbudsImg from '@/assets/product-earbuds.jpg';
import speakerImg from '@/assets/product-speaker.jpg';
import watchImg from '@/assets/product-watch.jpg';
import chargerImg from '@/assets/product-charger.jpg';
import headphonesImg from '@/assets/product-headphones.jpg';
import standImg from '@/assets/product-stand.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Aura Earbuds',
    price: 129,
    description: 'Premium wireless earbuds with crystal-clear sound and all-day comfort',
    image: earbudsImg,
    category: 'Audio',
  },
  {
    id: '2',
    name: 'Echo Speaker',
    price: 199,
    description: 'Portable bluetooth speaker with 360° sound and 12-hour battery',
    image: speakerImg,
    category: 'Audio',
  },
  {
    id: '3',
    name: 'Pulse Watch',
    price: 299,
    description: 'Smart fitness tracker with heart rate monitoring and GPS',
    image: watchImg,
    category: 'Wearables',
  },
  {
    id: '4',
    name: 'Zen Charger',
    price: 49,
    description: 'Fast wireless charging pad with elegant minimalist design',
    image: chargerImg,
    category: 'Accessories',
  },
  {
    id: '5',
    name: 'Nova Headphones',
    price: 349,
    description: 'Over-ear headphones with active noise cancellation',
    image: headphonesImg,
    category: 'Audio',
  },
  {
    id: '6',
    name: 'Apex Stand',
    price: 79,
    description: 'Aluminum phone stand with adjustable viewing angles',
    image: standImg,
    category: 'Accessories',
  },
];
