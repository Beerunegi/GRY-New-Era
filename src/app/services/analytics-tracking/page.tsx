import { AnalyticsHero } from "@/components/sections/analytics-hero";
import { AnalyticsOverview } from "@/components/sections/analytics-overview";
import { AnalyticsServicesGrid } from "@/components/sections/analytics-services-grid";
import { AnalyticsProcess } from "@/components/sections/analytics-process";
import { AnalyticsBenefits } from "@/components/sections/analytics-benefits";
import { AnalyticsFAQ } from "@/components/sections/analytics-faq";
import { PPCCaseStudies } from "@/components/sections/ppc-case-studies";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "GA4, GTM & Conversion Tracking Services", description: "Make confident marketing decisions with accurate GA4, Google Tag Manager, consent-aware conversion tracking and actionable reporting dashboards.", path: "/services/analytics-tracking", keywords: ["GA4 setup services India", "Google Tag Manager agency", "conversion tracking Ghaziabad"] });

export default function AnalyticsTrackingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnalyticsHero />
      <AnalyticsOverview />
      <AnalyticsServicesGrid />
      <AnalyticsProcess />
      <AnalyticsBenefits />
      {/* Reusing existing case studies as placeholder for data-driven results */}
      <PPCCaseStudies />
      <AnalyticsFAQ />
      <CTASection />
      <ContactSection />
    </div>
  );
}
