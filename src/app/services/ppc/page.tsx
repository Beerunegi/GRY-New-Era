import { PPCHero } from "@/components/sections/ppc-hero";
import { PPCServicesGrid } from "@/components/sections/ppc-services-grid";
import { PPCProcess } from "@/components/sections/ppc-process";
import { PPCCaseStudies } from "@/components/sections/ppc-case-studies";
import { PPCFAQ } from "@/components/sections/ppc-faq";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Google Ads & PPC Agency in Ghaziabad", description: "Generate qualified leads with Google Ads, paid social and conversion-focused PPC management from our Ghaziabad performance marketing team.", path: "/services/ppc", keywords: ["PPC agency Ghaziabad", "Google Ads company Ghaziabad", "performance marketing Delhi NCR"] });

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
