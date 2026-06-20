import { AIOHero } from "@/components/sections/aio-hero";
import { AIOServicesGrid } from "@/components/sections/aio-services-grid";
import { AIOProcess } from "@/components/sections/aio-process";
import { AIOCaseStudies } from "@/components/sections/aio-case-studies";
import { AIOFAQ } from "@/components/sections/aio-faq";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "AI Optimization & AEO Services in India", description: "Improve brand visibility across AI Overviews, ChatGPT, Gemini and Perplexity with entity-led AIO, answer engine optimization and structured content.", path: "/services/ai-optimization", keywords: ["AI optimization services India", "AEO agency India", "AI search optimization Ghaziabad", "LLM visibility services"] });

export default function AIOPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AIOHero />
      <AIOServicesGrid />
      <AIOProcess />
      <AIOCaseStudies />
      <AIOFAQ />
      <CTASection />
      <ContactSection />
    </div>
  );
}
