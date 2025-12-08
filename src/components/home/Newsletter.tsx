import { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Mock submission
    setIsSubmitted(true);
    toast({
      title: "You're subscribed!",
      description: "You'll receive updates on SEWA events and impact.",
    });
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-sewa-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Get Involved
          </h2>
          <p className="text-muted-foreground mb-8">
            Get updates on SEWA events and impact. Be the first to know about upcoming volunteering opportunities.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-card"
              required
            />
            <Button type="submit" size="lg" disabled={isSubmitted}>
              {isSubmitted ? (
                <>
                  <Check className="w-5 h-5" />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
