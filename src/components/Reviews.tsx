import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    review: "Absolutely stunning piece! The craftsmanship is exceptional and it arrived exactly as described. The rose gold has a beautiful warm tone that complements my skin perfectly.",
    product: "Emerald Rose Gold Ring",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Emily Chen",
    rating: 5,
    date: "1 month ago",
    verified: true,
    review: "I've been looking for the perfect layered necklace for months, and this exceeded all my expectations. The pearls are lustrous and the quality is outstanding.",
    product: "Pearl Layered Necklace",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Jessica Rodriguez",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
    review: "The earrings are even more beautiful in person! They catch the light perfectly and I've received so many compliments. Worth every penny.",
    product: "Diamond Drop Earrings",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Amanda Thompson",
    rating: 4,
    date: "1 week ago",
    verified: true,
    review: "Beautiful bracelet with excellent sparkle. The only reason for 4 stars instead of 5 is that the clasp is a bit tricky to fasten alone, but the quality is undeniable.",
    product: "Tennis Diamond Bracelet",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face"
  }
];

interface ReviewsProps {
  productSpecific?: boolean;
  limit?: number;
}

export const Reviews = ({ productSpecific = false, limit }: ReviewsProps) => {
  const displayReviews = limit ? reviews.slice(0, limit) : reviews;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "h-4 w-4",
          i < rating ? "fill-primary text-primary" : "text-muted"
        )}
      />
    ));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {!productSpecific && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Our <span className="text-luxury">Customers</span> Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Read authentic reviews from our valued customers who have experienced 
              the beauty and quality of our jewelry firsthand.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayReviews.map((review) => (
            <Card key={review.id} className="card-luxury">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{review.name}</h4>
                      {review.verified && (
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    {!productSpecific && (
                      <div className="text-sm text-muted-foreground mb-2">
                        {review.product}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="h-5 w-5 text-primary/30 absolute -top-1 -left-1" />
                  <p className="text-muted-foreground leading-relaxed ml-4">
                    {review.review}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!productSpecific && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-8 p-6 bg-card rounded-2xl shadow-soft">
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury mb-1">4.9</div>
                <div className="flex mb-1">{renderStars(5)}</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury mb-1">2.4K+</div>
                <div className="text-sm text-muted-foreground">Total Reviews</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};