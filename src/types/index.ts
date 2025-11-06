export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'Audio' | 'Wearables' | 'Accessories';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string;
  customerEmail: string;
  address: string;
  timestamp: Date;
}
