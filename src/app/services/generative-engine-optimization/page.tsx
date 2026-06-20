import { GEOHero } from "@/components/sections/geo-hero";
import { GEOOverview } from "@/components/sections/geo-overview";
import { GEOServicesGrid } from "@/components/sections/geo-services-grid";
import { GEOProcess } from "@/components/sections/geo-process";
import { GEOBenefits } from "@/components/sections/geo-benefits";
import { GEOFAQ } from "@/components/sections/geo-faq";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Generative Engine Optimization (GEO) Services", description: "Earn trustworthy citations and recommendations in ChatGPT, Gemini, Perplexity and Google AI Overviews with entity, content and authority-led GEO services.", path: "/services/generative-engine-optimization", keywords: ["generative engine optimization India", "GEO agency India", "ChatGPT SEO", "Google AI Overview optimization"] });

export default function GEOPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GEOHero />
      <GEOOverview />
      <GEOServicesGrid />
      <GEOProcess />
      <GEOBenefits />
      <GEOFAQ />
      <CTASection />
      <ContactSection />
    </div>
  );
}
