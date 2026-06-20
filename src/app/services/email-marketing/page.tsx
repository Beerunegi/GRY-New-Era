import { EmailHero } from "@/components/sections/email-hero";
import { EmailOverview } from "@/components/sections/email-overview";
import { EmailServicesGrid } from "@/components/sections/email-services-grid";
import { EmailProcess } from "@/components/sections/email-process";
import { EmailBenefits } from "@/components/sections/email-benefits";
import { EmailFAQ } from "@/components/sections/email-faq";
import { PPCCaseStudies } from "@/components/sections/ppc-case-studies";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Email Marketing & Automation Services", description: "Increase revenue and retention with lifecycle strategy, automated email flows, segmentation, newsletters and conversion-focused campaign optimization.", path: "/services/email-marketing", keywords: ["email marketing agency India", "email automation services", "ecommerce email marketing Delhi NCR"] });

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
