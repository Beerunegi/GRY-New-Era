import { BrandingHero } from "@/components/sections/branding-hero";
import { BrandingOverview } from "@/components/sections/branding-overview";
import { BrandingServicesGrid } from "@/components/sections/branding-services-grid";
import { BrandingProcess } from "@/components/sections/branding-process";
import { BrandingBenefits } from "@/components/sections/branding-benefits";
import { BrandingFAQ } from "@/components/sections/branding-faq";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding & Creative Design Studio | New Digital Era",
  description: "Award-winning brand identity, logo design, and creative marketing materials that elevate your business and command attention.",
};

export default function BrandingCreativePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrandingHero />
      <BrandingOverview />
      <BrandingServicesGrid />
      <BrandingProcess />
      <BrandingBenefits />
      {/* Visual portfolio section repurposed for branding display */}
      <PortfolioSection />
      <BrandingFAQ />
      <CTASection />
      <ContactSection />
    </div>
  );
}
