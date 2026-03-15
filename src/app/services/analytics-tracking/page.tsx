import { AnalyticsHero } from "@/components/sections/analytics-hero";
import { AnalyticsOverview } from "@/components/sections/analytics-overview";
import { AnalyticsServicesGrid } from "@/components/sections/analytics-services-grid";
import { AnalyticsProcess } from "@/components/sections/analytics-process";
import { AnalyticsBenefits } from "@/components/sections/analytics-benefits";
import { AnalyticsFAQ } from "@/components/sections/analytics-faq";
import { PPCCaseStudies } from "@/components/sections/ppc-case-studies";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics & Tracking Setup Services (GA4, GTM) | New Digital Era",
  description: "Measure what matters. Expert setup for Google Analytics 4, Tag Manager, and server-side conversion tracking for accurate marketing ROI.",
};

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
