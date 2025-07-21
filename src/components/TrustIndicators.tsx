import { Star, Users, Calendar, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trustMetrics = [
  {
    icon: Star,
    value: "4.9/5",
    label: "Customer Rating",
    subtext: "Based on 2,400+ reviews"
  },
  {
    icon: Users,
    value: "50K+",
    label: "Happy Customers",
    subtext: "Worldwide satisfaction"
  },
  {
    icon: Calendar,
    value: "25+",
    label: "Years Experience",
    subtext: "Heritage of excellence"
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Authentic Guarantee",
    subtext: "Certified quality"
  }
];

const certifications = [
  {
    name: "GIA Certified",
    description: "Gemological Institute of America",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop"
  },
  {
    name: "AGS Certified",
    description: "American Gem Society",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop"
  },
  {
    name: "SSL Secured",
    description: "256-bit encryption",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop"
  },
  {
    name: "BBB Accredited",
    description: "A+ Business Rating",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop"
  }
];

interface TrustIndicatorsProps {
  variant?: "metrics" | "certifications" | "both";
  compact?: boolean;
}

export const TrustIndicators = ({ variant = "both", compact = false }: TrustIndicatorsProps) => {
  if (compact) {
    return (
      <div className="flex items-center justify-center gap-8 py-8">
        {trustMetrics.slice(0, 2).map((metric, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center mb-2">
              <metric.icon className="h-5 w-5 text-primary mr-2" />
              <span className="text-2xl font-bold text-luxury">{metric.value}</span>
            </div>
            <div className="text-sm text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-luxury">
      <div className="container mx-auto px-4">
        {(variant === "metrics" || variant === "both") && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Trusted by <span className="text-luxury">Thousands</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence has earned us the trust and loyalty 
                of customers worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustMetrics.map((metric, index) => (
                <Card key={index} className="card-luxury text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <metric.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-luxury mb-2">
                      {metric.value}
                    </div>
                    <div className="font-semibold mb-1">{metric.label}</div>
                    <div className="text-sm text-muted-foreground">
                      {metric.subtext}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {(variant === "certifications" || variant === "both") && (
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Certified & <span className="text-luxury">Accredited</span>
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Our certifications and partnerships ensure the highest standards 
                of quality and security.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-luxury text-center group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <ShieldCheck className="h-8 w-8 text-primary" />
                    </div>
                    <div className="font-semibold mb-1">{cert.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {cert.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};