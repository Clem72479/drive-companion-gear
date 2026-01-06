import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Floor Mats Set",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "LED Interior Light Kit",
    price: 45.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=400&fit=crop",
    badge: null,
  },
  {
    id: 3,
    name: "Universal Phone Mount",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=400&fit=crop",
    badge: "Top Rated",
  },
  {
    id: 4,
    name: "Leather Steering Wheel Cover",
    price: 34.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=400&fit=crop",
    badge: null,
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Featured</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
              Popular Products
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Discover our most loved car accessories trusted by thousands of drivers
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-secondary/30 rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-muted-foreground text-xs">({product.reviews})</span>
                </div>
                <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through text-sm">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <Button className="w-full" size="sm">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
