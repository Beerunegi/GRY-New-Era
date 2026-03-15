import { PortfolioPageHero } from "@/components/sections/portfolio-page-hero";
import { PortfolioGridFilter } from "@/components/sections/portfolio-grid-filter";
import { PortfolioCaseStudies } from "@/components/sections/portfolio-case-studies";
import { ClientsMarquee } from "@/components/sections/clients-marquee";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | New Digital Era",
  description: "Explore our portfolio of high-converting websites, dominant SEO campaigns, and creative digital marketing work driving growth for industry leaders.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PortfolioPageHero />
      <PortfolioGridFilter />
      <PortfolioCaseStudies />
      
      {/* Reusing existing high-quality components */}
      <ClientsMarquee />
      <div className="bg-muted/5 py-12">
        <TestimonialsSection />
      </div>
      <CTASection />
      <ContactSection />
    </div>
  );
}
