import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Emerald Rose Gold Ring",
    price: "$2,890",
    originalPrice: "$3,200",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop",
    category: "Rings",
    isNew: true,
  },
  {
    id: 2,
    name: "Pearl Layered Necklace",
    price: "$1,450",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
    category: "Necklaces",
    isBestseller: true,
  },
  {
    id: 3,
    name: "Diamond Drop Earrings",
    price: "$3,200",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
    category: "Earrings",
    isNew: true,
  },
  {
    id: 4,
    name: "Tennis Diamond Bracelet",
    price: "$4,750",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop",
    category: "Bracelets",
    isBestseller: true,
  },
  {
    id: 5,
    name: "Vintage Gold Ring",
    price: "$1,890",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop",
    category: "Rings",
  },
  {
    id: 6,
    name: "Sapphire Pendant",
    price: "$2,100",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
    category: "Necklaces",
  },
];

export const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView.desktop >= products.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, products.length - itemsPerView.desktop) : prev - 1
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <section className="py-20 bg-gradient-luxury">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-luxury">Featured</span> Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most sought-after pieces, each carefully selected for their 
            exceptional beauty and timeless appeal.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <Button
            variant="elegant"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-luxury"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="elegant"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-luxury"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Products Grid */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView.desktop)}%)`,
                width: `${(products.length / itemsPerView.desktop) * 100}%`
              }}
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={cn(
                    "group cursor-pointer card-product animate-fade-in",
                    index >= currentIndex && index < currentIndex + itemsPerView.desktop 
                      ? "opacity-100" : "opacity-90"
                  )}
                  style={{ animationDelay: `${(index % itemsPerView.desktop) * 100}ms` }}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          New
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="bg-foreground text-background px-3 py-1 rounded-full text-xs font-medium">
                          Bestseller
                        </span>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="elegant" size="icon" className="h-10 w-10 rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="luxury" size="icon" className="h-10 w-10 rounded-full">
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                    <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-foreground">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(products.length / itemsPerView.desktop) }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === Math.floor(currentIndex / itemsPerView.desktop)
                    ? "bg-primary scale-125"
                    : "bg-border hover:bg-muted-foreground"
                )}
                onClick={() => setCurrentIndex(index * itemsPerView.desktop)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};