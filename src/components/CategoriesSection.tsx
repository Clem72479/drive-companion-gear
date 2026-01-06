import { Wrench, Sparkles, Gauge, Shield, Zap, Settings } from "lucide-react";

const categories = [
  {
    icon: Wrench,
    title: "Interior Accessories",
    count: "250+ Products",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Sparkles,
    title: "Exterior Styling",
    count: "180+ Products",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Gauge,
    title: "Performance Parts",
    count: "320+ Products",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "Safety & Security",
    count: "140+ Products",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "Electronics",
    count: "200+ Products",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Settings,
    title: "Maintenance",
    count: "160+ Products",
    color: "from-amber-500 to-orange-600",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Browse By</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
            Product Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of premium car equipment and accessories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-xl bg-card border border-border p-6 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-glow"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-1">{category.title}</h3>
              <p className="text-muted-foreground text-xs">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
