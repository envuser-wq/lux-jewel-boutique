import { Shield, Truck, RotateCcw, Award, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Every piece comes with our comprehensive lifetime warranty covering craftsmanship and authenticity.",
    color: "text-primary"
  },
  {
    icon: Truck,
    title: "Free Secure Shipping",
    description: "Complimentary insured shipping on all orders over $1,000 with signature confirmation.",
    color: "text-primary"
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    description: "Not completely satisfied? Return unworn items within 30 days for a full refund.",
    color: "text-primary"
  },
  {
    icon: Award,
    title: "Certified Authentic",
    description: "All diamonds and gemstones come with certificates from recognized gemological institutes.",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Handcrafted Quality",
    description: "Each piece is meticulously handcrafted by master artisans with decades of experience.",
    color: "text-primary"
  },
  {
    icon: Sparkles,
    title: "Custom Design",
    description: "Work with our designers to create bespoke pieces that reflect your unique style and story.",
    color: "text-primary"
  }
];

interface FeaturesProps {
  grid?: "2x3" | "3x2" | "1x6";
  showTitle?: boolean;
}

export const Features = ({ grid = "3x2", showTitle = true }: FeaturesProps) => {
  const getGridClass = () => {
    switch (grid) {
      case "2x3":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case "3x2":
        return "grid-cols-1 md:grid-cols-3";
      case "1x6":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-6";
      default:
        return "grid-cols-1 md:grid-cols-3";
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose <span className="text-luxury">Our Jewelry</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that comes with exceptional quality, 
              outstanding service, and unwavering commitment to excellence.
            </p>
          </div>
        )}

        <div className={`grid ${getGridClass()} gap-6`}>
          {features.map((feature, index) => (
            <Card key={index} className="card-luxury group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};