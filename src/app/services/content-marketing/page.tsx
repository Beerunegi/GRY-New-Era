import { ContentHero } from "@/components/sections/content-hero";
import { ContentOverview } from "@/components/sections/content-overview";
import { ContentServicesGrid } from "@/components/sections/content-services-grid";
import { ContentProcess } from "@/components/sections/content-process";
import { ContentBenefits } from "@/components/sections/content-benefits";
import { ContentFAQ } from "@/components/sections/content-faq";
import { SEOCaseStudies } from "@/components/sections/seo-case-studies";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "SEO Content Marketing Services in Ghaziabad", description: "Build topical authority and demand with search-led content strategy, expert articles, landing pages and brand storytelling optimized for search and AI answers.", path: "/services/content-marketing", keywords: ["content marketing Ghaziabad", "SEO content agency Delhi NCR", "AEO content writing India"] });

export default function ContentMarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContentHero />
      <ContentOverview />
      <ContentServicesGrid />
      <ContentProcess />
      <ContentBenefits />
      <SEOCaseStudies />
      <ContentFAQ />
      <CTASection />
      <ContactSection />
    </div>
  );
}
