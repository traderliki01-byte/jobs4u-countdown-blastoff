import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export const LaunchNotification = () => {
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