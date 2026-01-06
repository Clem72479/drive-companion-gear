import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCar}
          alt="Premium sports car"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4 animate-fade-up">
            Premium Car Equipment
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Upgrade Your Ride With{" "}
            <span className="text-gradient">Premium Gear</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Discover top-quality car accessories and equipment designed to enhance your driving experience. Universal fit for all private vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button variant="hero" size="xl">
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "400ms" }}>
            {[
              { value: "50K+", label: "Happy Customers" },
              { value: "1000+", label: "Products" },
              { value: "4.9", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
