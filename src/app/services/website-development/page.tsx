import { WebDevHero } from "@/components/sections/web-dev-hero";
import { WebDevOverview } from "@/components/sections/web-dev-overview";
import { WebDevServicesGrid } from "@/components/sections/web-dev-services-grid";
import { WebDevProcess } from "@/components/sections/web-dev-process";
import { WebDevBenefits } from "@/components/sections/web-dev-benefits";
import { WebDevFAQ } from "@/components/sections/web-dev-faq";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Website Development Company in Ghaziabad", description: "Launch a fast, SEO-ready business website, eCommerce store or custom web app with our Next.js, React and WordPress developers in Ghaziabad.", path: "/services/website-development", keywords: ["website development company Ghaziabad", "web design Ghaziabad", "WordPress developer Delhi NCR", "Next.js development India"] });

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
