import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-secondary to-card border border-border p-8 md:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Newsletter</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              Get Exclusive Deals & Updates
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter and receive 15% off your first order, plus early access to new products and special promotions.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-background/50 border-border focus:border-primary"
              />
              <Button variant="hero" size="lg" className="shrink-0">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
            
            <p className="text-muted-foreground text-xs mt-4">
              No spam, unsubscribe at any time. By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
