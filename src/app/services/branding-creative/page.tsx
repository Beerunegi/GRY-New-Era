import { BrandingHero } from "@/components/sections/branding-hero";
import { BrandingOverview } from "@/components/sections/branding-overview";
import { BrandingServicesGrid } from "@/components/sections/branding-services-grid";
import { BrandingProcess } from "@/components/sections/branding-process";
import { BrandingBenefits } from "@/components/sections/branding-benefits";
import { BrandingFAQ } from "@/components/sections/branding-faq";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Branding & Creative Design Agency in Ghaziabad", description: "Build a distinctive, consistent brand with strategy, visual identity, logo design and campaign creative from our Ghaziabad design team.", path: "/services/branding-creative", keywords: ["branding agency Ghaziabad", "logo design Ghaziabad", "creative agency Delhi NCR"] });

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
