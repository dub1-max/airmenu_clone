import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuCard } from "@/components/MenuCard";
import { Cart } from "@/components/Cart";

// Sample menu data - will be replaced with Supabase data later
const sampleMenuItems = [
  {
    id: "1",
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken pieces and aromatic spices",
    price: 320,
    imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop",
    stock: 15,
    isSpecial: false
  },
  {
    id: "2", 
    name: "Pork-Ribs",
    description: "Slow-cooked pork ribs with our signature BBQ glaze - Limited special item",
    price: 450,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    stock: 5,
    isSpecial: true
  },
  {
    id: "3",
    name: "Paneer Tikka",
    description: "Grilled cottage cheese cubes marinated in yogurt and spices",
    price: 280,
    imageUrl: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
    stock: 20,
    isSpecial: false
  },
  {
    id: "4",
    name: "Biryani Special",
    description: "Fragrant basmati rice with spiced meat and aromatic herbs",
    price: 380,
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&h=300&fit=crop",
    stock: 12,
    isSpecial: false
  }
];

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  isSpecial?: boolean;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (id: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: quantity
    }));

    const menuItem = sampleMenuItems.find(item => item.id === id);
    if (!menuItem) return;

    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => {
        const existingItem = prev.find(item => item.id === id);
        if (existingItem) {
          return prev.map(item =>
            item.id === id ? { ...item, quantity } : item
          );
        } else {
          return [...prev, {
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            quantity,
            isSpecial: menuItem.isSpecial
          }];
        }
      });
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    setQuantities(prev => ({
      ...prev,
      [id]: 0
    }));
  };

  const handleProceedToReservation = () => {
    // TODO: Implement navigation to reservation page
    console.log("Proceeding to table selection...");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Delicious Menu</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sampleMenuItems.map((item) => (
                  <MenuCard
                    key={item.id}
                    {...item}
                    quantity={quantities[item.id] || 0}
                    onQuantityChange={handleQuantityChange}
                  />
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <Cart
                items={cartItems}
                onRemoveItem={handleRemoveItem}
                onProceedToReservation={handleProceedToReservation}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
