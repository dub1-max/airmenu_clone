export const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-light-brown fixed w-full top-0 z-50 animate-slide-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-deep-brown flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground font-serif tracking-tight">KYCSync</h1>
          </div>
        </div>
      </div>
    </header>
  );
};