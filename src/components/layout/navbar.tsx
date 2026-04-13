"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "SEO Optimization", href: "/services/seo" },
      { name: "Paid Advertising (PPC)", href: "/services/ppc" },
      { name: "Social Media Marketing", href: "/services/social-media" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Email Marketing", href: "/services/email-marketing" },
      { name: "Website Development", href: "/services/website-development" },
      { name: "Conversion Rate Optimization", href: "/services/conversion-rate-optimization" },
      { name: "Analytics & Tracking", href: "/services/analytics-tracking" },
      { name: "Branding & Creative", href: "/services/branding-creative" },
      { name: "Online Reputation Management", href: "/services/online-reputation-management" },
      { name: "AI Optimization (AIO)", href: "/services/ai-optimization" },
      { name: "Generative Engine Optimization (GEO)", href: "/services/generative-engine-optimization" }
    ]
  },
  { name: "Courses", href: "/courses" },
  { name: "Free SEO Audit", href: "/get-free-seo-audit" },
  { name: "Why Us", href: "/#why-us" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
            <Rocket className="w-5 h-5" />
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}>
            NEW DIGITAL ERA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors py-2 flex items-center gap-1",
                  isScrolled 
                    ? "text-muted-foreground hover:text-primary" 
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                {link.submenu && <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {/* Dropdown Menu */}
              {link.submenu && (
                <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="w-[500px] bg-card border border-border shadow-xl rounded-2xl p-4 grid grid-cols-2 gap-1 relative z-50">
                    <div className="absolute -top-1.5 left-8 w-3 h-3 bg-card border-t border-l border-border rotate-45" />
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="text-base text-muted-foreground hover:text-primary hover:bg-primary/5 px-3 py-2.5 rounded-lg transition-colors font-medium truncate"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button className={cn(
            "shadow-md",
            !isScrolled && "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20"
          )}>
            Get Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-lg py-4 px-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              {link.submenu ? (
                <>
                  <button 
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex flex-row items-center justify-between text-lg font-medium text-foreground py-3 border-b border-border/50 text-left"
                  >
                    {link.name}
                    <ChevronDown className={cn("w-4 h-4 transition-transform", mobileServicesOpen && "rotate-180")} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="flex flex-col pl-4 py-2 bg-muted/20 border-b border-border/50">
                      <Link 
                        href="/services" 
                        className="py-2.5 text-base font-bold text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        View All Services →
                      </Link>
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="py-2.5 text-base text-muted-foreground hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-medium text-foreground py-3 border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-3 mt-4 mb-4">
            <Button className="w-full">Get Consultation</Button>
          </div>
        </div>
      )}
    </header>
  );
}
