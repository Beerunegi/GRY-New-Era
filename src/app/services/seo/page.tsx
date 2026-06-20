import { SEOHero } from "@/components/sections/seo-hero";
import { SEOServicesGrid } from "@/components/sections/seo-services-grid";
import { SEOProcess } from "@/components/sections/seo-process";
import { SEOCaseStudies } from "@/components/sections/seo-case-studies";
import { SEOFAQ } from "@/components/sections/seo-faq";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "SEO Company in Ghaziabad | Local & Technical SEO", description: "Grow rankings, Google Maps visibility and qualified leads with local, technical and on-page SEO services from our Ghaziabad SEO team serving Delhi NCR.", path: "/services/seo", keywords: ["SEO company in Ghaziabad", "local SEO Ghaziabad", "SEO agency Delhi NCR", "Google Maps SEO"] });

export default function SEOPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHero />
      <SEOServicesGrid />
      <SEOProcess />
      <SEOCaseStudies />
      <SEOFAQ />
      <CTASection />
      <ContactSection />
    </div>
  );
}
