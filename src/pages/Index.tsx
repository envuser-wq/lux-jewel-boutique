import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Features } from "@/components/Features";
import { TrustIndicators } from "@/components/TrustIndicators";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductCarousel />
      <Features />
      <TrustIndicators />
      <Reviews limit={4} />
      <FAQ limit={6} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
