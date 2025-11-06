import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden border-border hover-lift smooth-transition">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover smooth-transition group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-6">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold">${product.price}</span>
          <Button
            onClick={() => addToCart(product)}
            size="default"
            className="gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};
