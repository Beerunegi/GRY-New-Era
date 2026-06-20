import { CROHero } from "@/components/sections/cro-hero";
import { CROOverview } from "@/components/sections/cro-overview";
import { CROServicesGrid } from "@/components/sections/cro-services-grid";
import { CROProcess } from "@/components/sections/cro-process";
import { CROBenefits } from "@/components/sections/cro-benefits";
import { CROFAQ } from "@/components/sections/cro-faq";
import { PPCCaseStudies } from "@/components/sections/ppc-case-studies";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Conversion Rate Optimization (CRO) Services", description: "Turn more traffic into leads and sales with research-led CRO, landing page optimization, behavioral analytics and structured experimentation.", path: "/services/conversion-rate-optimization", keywords: ["conversion rate optimization India", "CRO agency Delhi NCR", "landing page optimization Ghaziabad"] });

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
