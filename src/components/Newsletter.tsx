import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-background via-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <Mail className="h-16 w-16 text-primary mx-auto mb-6 animate-elegant-float" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Stay in the <span className="text-luxury">Loop</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be the first to discover our new collections, exclusive offers, and 
              behind-the-scenes stories from our atelier.
            </p>
          </div>

          {/* Newsletter Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-luxury flex-1"
                  required
                />
                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg"
                  className="whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto animate-fade-in">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
                <Check className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-2">Welcome to Lumière!</h3>
                <p className="text-muted-foreground">
                  Thank you for subscribing. You'll receive our latest updates soon.
                </p>
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-heading font-semibold mb-2">Exclusive Access</h3>
              <p className="text-sm text-muted-foreground">
                First access to new collections and limited editions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-heading font-semibold mb-2">Special Offers</h3>
              <p className="text-sm text-muted-foreground">
                Subscriber-only discounts and birthday surprises
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="font-heading font-semibold mb-2">Style Insights</h3>
              <p className="text-sm text-muted-foreground">
                Expert tips and trends from our jewelry designers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};