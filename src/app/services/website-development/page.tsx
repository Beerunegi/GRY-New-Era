import { WebDevHero } from "@/components/sections/web-dev-hero";
import { WebDevOverview } from "@/components/sections/web-dev-overview";
import { WebDevServicesGrid } from "@/components/sections/web-dev-services-grid";
import { WebDevProcess } from "@/components/sections/web-dev-process";
import { WebDevBenefits } from "@/components/sections/web-dev-benefits";
import { WebDevFAQ } from "@/components/sections/web-dev-faq";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Website Development | New Digital Era Agency",
  description: "Specialized in custom web applications, high-converting eCommerce stores, and premium business websites built with Next.js, React, and WordPress.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <WebDevHero />
      <WebDevOverview />
      <WebDevServicesGrid />
      <WebDevProcess />
      <WebDevBenefits />
      <PortfolioSection />
      <WebDevFAQ />
      <CTASection />
      <ContactSection />
    </div>
  );
}
