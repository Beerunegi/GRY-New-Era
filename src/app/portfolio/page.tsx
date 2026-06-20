import { PortfolioPageHero } from "@/components/sections/portfolio-page-hero";
import { PortfolioGridFilter } from "@/components/sections/portfolio-grid-filter";
import { PortfolioCaseStudies } from "@/components/sections/portfolio-case-studies";
import { ClientsMarquee } from "@/components/sections/clients-marquee";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Digital Marketing & Web Development Portfolio", description: "Explore SEO, paid media, eCommerce and website development case studies from New Digital Era's digital growth team in Ghaziabad.", path: "/portfolio", keywords: ["digital marketing portfolio India", "web development portfolio Ghaziabad", "SEO case studies Delhi NCR"] });

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
