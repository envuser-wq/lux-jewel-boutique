import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Jewelry Collection"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-elegant-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-glow/10 rounded-full blur-2xl animate-elegant-float" style={{ animationDelay: "1s" }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6">
            <span className="block text-foreground">Timeless</span>
            <span className="block text-luxury">Elegance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our exquisite collection of handcrafted jewelry, 
            where every piece tells a story of refined beauty and exceptional craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="luxury" size="xl" className="min-w-48">
              Shop Collection
            </Button>
            <Button variant="ghost-luxury" size="xl" className="min-w-48">
              Custom Design
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-luxury mb-2">50K+</div>
            <div className="text-sm md:text-base text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-luxury mb-2">25+</div>
            <div className="text-sm md:text-base text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-luxury mb-2">100%</div>
            <div className="text-sm md:text-base text-muted-foreground">Authentic</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};