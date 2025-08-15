import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

// AnimatedBackground Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

// Header Component
const Header = () => {
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

// CountdownTimer Component
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

interface TimeUnitProps {
  value: number;
  label: string;
}

const TimeUnit = ({ value, label }: TimeUnitProps) => {
  const [prevValue, setPrevValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsFlipping(true);
      setTimeout(() => {
        setPrevValue(value);
        setIsFlipping(false);
      }, 300);
    }
  }, [value, prevValue]);

  return (
    <div className="text-center animate-slide-in-up">
      <div className="relative perspective-1000">
        <div 
          className={`
            bg-gradient-to-br from-card to-secondary 
            border border-border 
            rounded-xl p-4 md:p-6 
            shadow-lg animate-pulse-glow
            transition-all duration-300
            ${isFlipping ? 'animate-digit-flip' : ''}
          `}
        >
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {String(value).padStart(2, '0')}
          </div>
        </div>
      </div>
      <div className="text-sm md:text-base lg:text-lg font-medium text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

// LaunchNotification Component
const LaunchNotification = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "You're in! 🚀",
        description: "We'll notify you the moment jobs4u.cloud launches!",
      });
      setEmail('');
    }
  };

  if (isSubscribed) {
    return (
      <div className="text-center animate-slide-in-up">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-6 py-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-primary font-medium">You'll be notified at launch! 🎉</span>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-6 animate-slide-in-up">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-foreground">
          Be the First to Experience the Future of Job Search
        </h3>
        <p className="text-muted-foreground">
          Get notified when we launch and receive exclusive early access benefits
        </p>
      </div>
      
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-card/50 border-border focus:border-primary transition-colors"
          required
        />
        <Button 
          type="submit"
          className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-medium"
        >
          Notify Me
        </Button>
      </form>
      
      <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>Zero Spam</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span>Early Access</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>Exclusive Benefits</span>
        </div>
      </div>
    </div>
  );
};

// Main Index Component
const Index = () => {
  // Calculate launch date (30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 -mt-20">
        <div className="text-center space-y-8 max-w-6xl mx-auto">
          {/* Launch announcement */}
          <div className="animate-slide-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">🚀 AI-Powered Job Search Revolution</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-6 animate-slide-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shine">
                AI That Finds &
              </span>
              <br />
              <span className="text-foreground">Applies to Your</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Dream Job
              </span>
            </h1>
            
            <div className="relative">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                While You Relax
              </h2>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm animate-pulse opacity-50"></div>
            </div>
          </div>

          {/* Description */}
          <div className="animate-slide-in-up max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              jobs4u.cloud searches, personalizes, and applies to jobs automatically using AI and your Gmail — with{' '}
              <span className="text-primary font-semibold">zero effort.</span>
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Launching In
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
            
            <CountdownTimer targetDate={launchDate} />
          </div>

          {/* Email notification signup */}
          <div className="pt-8">
            <LaunchNotification />
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-12 animate-slide-in-up">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Google OAuth Verified</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Enterprise Security</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;