import { PPCHero } from "@/components/sections/ppc-hero";
import { PPCServicesGrid } from "@/components/sections/ppc-services-grid";
import { PPCProcess } from "@/components/sections/ppc-process";
import { PPCCaseStudies } from "@/components/sections/ppc-case-studies";
import { PPCFAQ } from "@/components/sections/ppc-faq";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Advertising & Google Ads Services | New Digital Era",
  description: "Maximize your ROAS with data-driven PPC management. Specialized in Search Ads, Display Ads, and Performance Marketing to drive instant leads.",
};

export default function PPCPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PPCHero />
      <PPCServicesGrid />
      <PPCProcess />
      <PPCCaseStudies />
      <PPCFAQ />
      <CTASection />
      <ContactSection />
    </div>
  );
}
