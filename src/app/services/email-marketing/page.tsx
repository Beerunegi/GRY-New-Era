import { EmailHero } from "@/components/sections/email-hero";
import { EmailOverview } from "@/components/sections/email-overview";
import { EmailServicesGrid } from "@/components/sections/email-services-grid";
import { EmailProcess } from "@/components/sections/email-process";
import { EmailBenefits } from "@/components/sections/email-benefits";
import { EmailFAQ } from "@/components/sections/email-faq";
import { PPCCaseStudies } from "@/components/sections/ppc-case-studies";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing & Automation Services | New Digital Era",
  description: "Drive sales and customer retention with expert email marketing services. We build automated flows and high-converting newsletters.",
};

export default function EmailMarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EmailHero />
      <EmailOverview />
      <EmailServicesGrid />
      <EmailProcess />
      <EmailBenefits />
      {/* Reusing PPC case studies as a placeholder for general marketing results until specific Email ones are provided */}
      <PPCCaseStudies />
      <EmailFAQ />
      <CTASection />
      <ContactSection />
    </div>
  );
}
