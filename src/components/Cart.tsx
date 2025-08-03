import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Trash2 } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  isSpecial?: boolean;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onProceedToReservation: () => void;
}

export const Cart = ({ items, onRemoveItem, onProceedToReservation }: CartProps) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (totalItems === 0) {
    return (
      <Card className="sticky top-4 border-elegant-gray">
        <CardContent className="p-6 text-center">
          <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Your cart is empty</p>
          <p className="text-sm text-muted-foreground mt-2">Add items to get started</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="sticky top-4 border-elegant-gray">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <ShoppingCart className="h-5 w-5" />
          <span>Your Order ({totalItems} items)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-2 bg-warm-cream rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-sm">{item.name}</span>
                  {item.isSpecial && (
                    <Badge variant="secondary" className="text-xs">Special</Badge>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">
                  ₹{item.price} × {item.quantity}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">₹{item.price * item.quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveItem(item.id)}
                  className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-elegant-gray pt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-bold text-lg">Total: ₹{totalPrice}</span>
          </div>
          
          <Button 
            onClick={onProceedToReservation}
            className="w-full bg-primary hover:bg-deep-rose text-white py-6 text-lg rounded-full"
            size="lg"
          >
            Proceed to Table Selection
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};