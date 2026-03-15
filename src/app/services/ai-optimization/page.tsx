import { AIOHero } from "@/components/sections/aio-hero";
import { AIOServicesGrid } from "@/components/sections/aio-services-grid";
import { AIOProcess } from "@/components/sections/aio-process";
import { AIOCaseStudies } from "@/components/sections/aio-case-studies";
import { AIOFAQ } from "@/components/sections/aio-faq";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Optimization (AIO) & GEO Services | New Digital Era",
  description: "Get cited by Perplexity, SearchGPT, and Gemini. Our AI Optimization (AIO) and Generative Engine Optimization (GEO) services future-proof your brand for the age of LLMs.",
};

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
