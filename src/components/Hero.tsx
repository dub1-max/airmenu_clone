import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, Clock, Users } from "lucide-react";

interface HeroProps {
  onViewMenu: () => void;
}

export const Hero = ({ onViewMenu }: HeroProps) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-warm-white via-background to-light-brown relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-soft-brown rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-primary to-deep-brown bg-clip-text text-transparent">
                KYCSync
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the future of dining with our seamless pre-ordering and table reservation system
            </p>
          </div>
          
          <div className="animate-scale-in delay-300">
            <Button 
              onClick={onViewMenu}
              size="lg" 
              className="bg-primary hover:bg-deep-brown text-white px-12 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group font-medium"
            >
              View Our Menu
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 animate-fade-in delay-500">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-light-brown">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Pre-Order System</h3>
              <p className="text-muted-foreground">Order your favorite dishes in advance and skip the wait</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-light-brown">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Real-Time Slots</h3>
              <p className="text-muted-foreground">Book your table with live availability updates</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-light-brown">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Seamless Experience</h3>
              <p className="text-muted-foreground">From order to table, everything in one smooth journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};