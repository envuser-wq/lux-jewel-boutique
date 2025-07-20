import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "All Collections", href: "/collections" },
        { name: "Rings", href: "/rings" },
        { name: "Necklaces", href: "/necklaces" },
        { name: "Earrings", href: "/earrings" },
        { name: "Bracelets", href: "/bracelets" },
        { name: "Custom Design", href: "/custom" },
      ],
    },
    {
      title: "Customer Care",
      links: [
        { name: "Size Guide", href: "/size-guide" },
        { name: "Care Instructions", href: "/care" },
        { name: "Shipping & Returns", href: "/shipping" },
        { name: "Warranty", href: "/warranty" },
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Craftsmanship", href: "/craftsmanship" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Press", href: "/press" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold text-luxury mb-6">
                Lumière
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                Creating timeless jewelry pieces that celebrate life's most precious moments. 
                Each piece is crafted with passion and attention to detail.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    123 Jewelry District, New York, NY 10013
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    hello@lumiere.com
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    asChild
                  >
                    <a href={social.href} aria-label={social.name}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-heading font-semibold text-foreground mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Lumière. All rights reserved.
            </div>
            
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};