import { CountdownTimer } from '@/components/CountdownTimer';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Header } from '@/components/Header';
import { LaunchNotification } from '@/components/LaunchNotification';

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
