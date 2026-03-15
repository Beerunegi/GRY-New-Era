import { ORMHero } from "@/components/sections/orm-hero";
import { ORMOverview } from "@/components/sections/orm-overview";
import { ORMServicesGrid } from "@/components/sections/orm-services-grid";
import { ORMProcess } from "@/components/sections/orm-process";
import { ORMBenefits } from "@/components/sections/orm-benefits";
import { ORMFAQ } from "@/components/sections/orm-faq";
import { PPCCaseStudies } from "@/components/sections/ppc-case-studies";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Reputation Management (ORM) Services | New Digital Era",
  description: "Protect and repair your brand's digital image. Expert review management, content suppression, and proactive 24/7 reputation monitoring.",
};

export default function OnlineReputationManagementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ORMHero />
      <ORMOverview />
      <ORMServicesGrid />
      <ORMProcess />
      <ORMBenefits />
      {/* Reusing existing case studies as placeholder until specific ORM ones are provided */}
      <PPCCaseStudies />
      <ORMFAQ />
      <CTASection />
      <ContactSection />
    </div>
  );
}
