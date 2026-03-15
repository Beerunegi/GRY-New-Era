import { ContentHero } from "@/components/sections/content-hero";
import { ContentOverview } from "@/components/sections/content-overview";
import { ContentServicesGrid } from "@/components/sections/content-services-grid";
import { ContentProcess } from "@/components/sections/content-process";
import { ContentBenefits } from "@/components/sections/content-benefits";
import { ContentFAQ } from "@/components/sections/content-faq";
import { SEOCaseStudies } from "@/components/sections/seo-case-studies";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Marketing & SEO Strategy | New Digital Era",
  description: "Drive authority and organic growth with our premium content marketing services. specialized in blog writing, SEO strategy, and brand storytelling.",
};

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
