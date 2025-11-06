import { CartItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartItemProps {
  item: CartItem;
}

export const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const subtotal = item.product.price * item.quantity;

  return (
    <div className="flex gap-4 rounded-lg border border-border bg-card p-4 smooth-transition">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">{item.product.name}</h3>
            <p className="text-sm text-muted-foreground">${item.product.price}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeFromCart(item.product.id)}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="h-8 w-8"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center font-medium">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="h-8 w-8"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
