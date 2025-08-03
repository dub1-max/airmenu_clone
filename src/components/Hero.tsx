import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-warm-cream py-16 px-4">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          Welcome to
          <br />
          <span className="text-primary">KYCSync!</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Are you ready to experience amazing flavors and seamless dining?
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-deep-rose text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          View Our Menu
        </Button>
      </div>
    </section>
  );
};