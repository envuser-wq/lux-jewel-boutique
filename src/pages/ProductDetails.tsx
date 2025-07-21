import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingBag, ArrowLeft, Star, Shield, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

// Product data (in a real app, this would come from an API)
const productData: Record<string, {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  images: string[];
  category: string;
  sku: string;
  rating: number;
  reviewCount: number;
  features: string[];
  sizes?: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}> = {
  "1": {
    id: 1,
    name: "Emerald Rose Gold Ring",
    price: "$2,890",
    originalPrice: "$3,200",
    description: "A stunning emerald-cut diamond set in 18k rose gold, featuring a classic solitaire design that showcases the stone's brilliance and fire. This timeless piece represents the perfect union of traditional craftsmanship and contemporary elegance.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb1b5?w=800&h=800&fit=crop",
    ],
    category: "Rings",
    sku: "RG-001-EM",
    rating: 4.9,
    reviewCount: 127,
    features: [
      "18k Rose Gold",
      "0.5 Carat Emerald Diamond",
      "VS1 Clarity",
      "Color Grade G",
      "Handcrafted Setting",
      "Lifetime Warranty"
    ],
    sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"],
    inStock: true,
    isNew: true,
  },
  "2": {
    id: 2,
    name: "Pearl Layered Necklace",
    price: "$1,450",
    description: "An exquisite multi-strand pearl necklace featuring lustrous freshwater pearls in varying sizes. This sophisticated piece adds elegance to any ensemble, from casual to formal occasions.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=800&fit=crop",
    ],
    category: "Necklaces",
    sku: "NC-002-PL",
    rating: 4.8,
    reviewCount: 89,
    features: [
      "Freshwater Pearls",
      "14k Gold Clasp",
      "Multiple Strand Design",
      "18-20 inch Length",
      "Hypoallergenic",
      "Gift Box Included"
    ],
    inStock: true,
    isBestseller: true,
  },
};

export const ProductDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const product = id ? productData[id] : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-heading mb-4">Product Not Found</h1>
          <Link to="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-sm hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-2xl bg-card">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "aspect-square overflow-hidden rounded-lg border-2 transition-all",
                    selectedImage === index 
                      ? "border-primary" 
                      : "border-border hover:border-muted-foreground"
                  )}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-muted-foreground">{product.category}</span>
                {product.isNew && (
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    New
                  </span>
                )}
                {product.isBestseller && (
                  <span className="bg-foreground text-background px-2 py-1 rounded-full text-xs font-medium">
                    Bestseller
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-foreground">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes && (
              <div>
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "py-3 px-4 rounded-lg border text-sm font-medium transition-all",
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-muted-foreground"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-accent transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-accent transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button className="btn-luxury flex-1" size="lg">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              
              <Button variant="ghost-luxury" className="w-full" size="lg">
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Product Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold text-sm mb-1">Lifetime Warranty</h4>
                  <p className="text-xs text-muted-foreground">Craftsmanship guaranteed</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold text-sm mb-1">Free Shipping</h4>
                  <p className="text-xs text-muted-foreground">On orders over $1,000</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <RotateCcw className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold text-sm mb-1">30-Day Returns</h4>
                  <p className="text-xs text-muted-foreground">No questions asked</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};