import { Car, ShieldCheck, Truck, Headphones } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Universal Fit",
    description: "Compatible with all major car brands and models",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Premium materials with 2-year warranty coverage",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on orders over $50 nationwide",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "24/7 customer service from car enthusiasts",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">AutoGear Pro</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're dedicated to providing the best car equipment for every vehicle owner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
