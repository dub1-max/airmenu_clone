import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus } from "lucide-react";

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  isSpecial?: boolean;
  quantity: number;
  onQuantityChange: (id: string, quantity: number) => void;
}

export const MenuCard = ({ 
  id, 
  name, 
  description, 
  price, 
  imageUrl, 
  stock, 
  isSpecial = false,
  quantity,
  onQuantityChange 
}: MenuItemProps) => {
  const handleDecrease = () => {
    if (quantity > 0) {
      onQuantityChange(id, quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (isSpecial && quantity >= 1) {
      // Special items limited to 1
      return;
    }
    if (stock > 0) {
      onQuantityChange(id, quantity + 1);
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-light-brown bg-white/80 backdrop-blur-sm hover:-translate-y-1 animate-scale-in">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        {isSpecial && (
          <Badge className="absolute top-3 right-3 bg-deep-brown text-white shadow-lg rounded-xl">
            Limited Special
          </Badge>
        )}
        {stock <= 5 && stock > 0 && (
          <Badge variant="destructive" className="absolute top-3 left-3 shadow-lg rounded-xl">
            Only {stock} left!
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 text-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">₹{price}</span>
          
          {stock > 0 ? (
            <div className="flex items-center space-x-2">
              {quantity > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDecrease}
                  className="h-8 w-8 p-0 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Minus className="h-4 w-4" />
                </Button>
              )}
              
              {quantity > 0 && (
                <span className="font-semibold min-w-[2rem] text-center">{quantity}</span>
              )}
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleIncrease}
                disabled={stock === 0 || (isSpecial && quantity >= 1)}
                className="h-8 w-8 p-0 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
        </div>
        
        {isSpecial && quantity >= 1 && (
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Limit: 1 per order
          </p>
        )}
      </CardContent>
    </Card>
  );
};