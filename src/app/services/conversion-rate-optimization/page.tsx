import { CROHero } from "@/components/sections/cro-hero";
import { CROOverview } from "@/components/sections/cro-overview";
import { CROServicesGrid } from "@/components/sections/cro-services-grid";
import { CROProcess } from "@/components/sections/cro-process";
import { CROBenefits } from "@/components/sections/cro-benefits";
import { CROFAQ } from "@/components/sections/cro-faq";
import { PPCCaseStudies } from "@/components/sections/ppc-case-studies";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization (CRO) Services | New Digital Era",
  description: "Improve your website leads and sales with data-driven Conversion Rate Optimization. We use A/B testing and behavioral analytics to maximize your ROI.",
};

export default function ConversionOptimizationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CROHero />
      <CROOverview />
      <CROServicesGrid />
      <CROProcess />
      <CROBenefits />
      <PPCCaseStudies />
      <CROFAQ />
      <CTASection />
      <ContactSection />
    </div>
  );
}
