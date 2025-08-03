export const Header = () => {
  return (
    <header className="bg-background border-b border-elegant-gray">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">KYCSync</h1>
          </div>
        </div>
      </div>
    </header>
  );
};