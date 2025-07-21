import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const faqData = [
  {
    id: 1,
    question: "What materials are used in your jewelry?",
    answer: "We use only the finest materials including 14k and 18k gold, sterling silver, natural diamonds, precious gemstones, and cultured pearls. All our pieces are hypoallergenic and meet the highest quality standards."
  },
  {
    id: 2,
    question: "Do you offer custom jewelry design?",
    answer: "Yes! We specialize in custom jewelry design. Our expert craftsmen can bring your vision to life, whether it's an engagement ring, anniversary piece, or a completely unique design. Contact us to discuss your custom project."
  },
  {
    id: 3,
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unworn items in their original packaging. Custom pieces are final sale unless there's a manufacturing defect. Items must be returned with the certificate of authenticity."
  },
  {
    id: 4,
    question: "Is my jewelry insured during shipping?",
    answer: "Absolutely. All orders are fully insured and shipped via secure, trackable methods. Orders over $1,000 require signature confirmation for delivery to ensure your precious items arrive safely."
  },
  {
    id: 5,
    question: "How do I care for my jewelry?",
    answer: "Store pieces separately in soft pouches, clean regularly with appropriate solutions (we provide care instructions), avoid exposure to chemicals and extreme temperatures, and have professional cleanings annually."
  },
  {
    id: 6,
    question: "Do you provide certificates of authenticity?",
    answer: "Yes, all our diamond and gemstone jewelry comes with certificates of authenticity from recognized gemological institutes. This guarantees the quality and authenticity of your purchase."
  },
  {
    id: 7,
    question: "What sizes are available?",
    answer: "Ring sizes range from 4-12 (including half sizes), necklaces come in standard 16\", 18\", and 20\" lengths with custom lengths available. Bracelets are typically 7-8 inches with adjustable options."
  },
  {
    id: 8,
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days within the US. Express shipping (1-2 days) is available for an additional fee. International shipping varies by location and typically takes 7-14 business days."
  }
];

interface FAQProps {
  limit?: number;
}

export const FAQ = ({ limit }: FAQProps) => {
  const [openItems, setOpenItems] = useState<number[]>([1]); // First item open by default
  
  const displayFAQs = limit ? faqData.slice(0, limit) : faqData;

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-gradient-luxury">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Frequently Asked <span className="text-luxury">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our jewelry, policies, and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {displayFAQs.map((faq) => (
            <Card key={faq.id} className="card-luxury">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors rounded-t-2xl"
                >
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 transition-transform duration-300 flex-shrink-0",
                      openItems.includes(faq.id) && "rotate-180"
                    )}
                  />
                </button>
                
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-out",
                    openItems.includes(faq.id) 
                      ? "max-h-96 opacity-100" 
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};