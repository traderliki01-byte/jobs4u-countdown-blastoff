export const Header = () => {
  return (
    <header className="relative z-10 py-6 px-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 animate-slide-in-up">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-primary-foreground shadow-lg">
            J4U
          </div>
          <span className="text-xl font-bold text-foreground">jobs4u.cloud</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
            Demo
          </a>
          <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 animate-pulse-glow">
            Start Free
          </button>
        </div>
      </nav>
    </header>
  );
};