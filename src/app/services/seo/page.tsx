import { SEOHero } from "@/components/sections/seo-hero";
import { SEOServicesGrid } from "@/components/sections/seo-services-grid";
import { SEOProcess } from "@/components/sections/seo-process";
import { SEOCaseStudies } from "@/components/sections/seo-case-studies";
import { SEOFAQ } from "@/components/sections/seo-faq";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium SEO Services | New Digital Era",
  description: "Scale your organic visibility with our data-driven SEO services. specialized in Technical SEO, On-Page optimization, and Authority building.",
};

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
