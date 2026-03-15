import { GEOHero } from "@/components/sections/geo-hero";
import { GEOOverview } from "@/components/sections/geo-overview";
import { GEOServicesGrid } from "@/components/sections/geo-services-grid";
import { GEOProcess } from "@/components/sections/geo-process";
import { GEOBenefits } from "@/components/sections/geo-benefits";
import { GEOFAQ } from "@/components/sections/geo-faq";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO Services | Generative Engine Optimization | New Digital Era",
  description: "Future-proof your brand for the age of AI. Our GEO services ensure your business is cited and recommended by ChatGPT, Google AI Overviews, and Gemini.",
};

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
