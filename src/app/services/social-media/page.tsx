import { SMHero } from "@/components/sections/sm-hero";
import { SMServicesGrid } from "@/components/sections/sm-services-grid";
import { SMProcess } from "@/components/sections/sm-process";
import { SMCaseStudies } from "@/components/sections/sm-case-studies";
import { SMFAQ } from "@/components/sections/sm-faq";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | New Digital Era",
  description: "Build a community and drive engagement with our social media marketing experts. Specialized in content creation, influencer marketing, and viral social strategies.",
};

export default function SocialMediaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SMHero />
      <SMServicesGrid />
      <SMProcess />
      <SMCaseStudies />
      <SMFAQ />
      <CTASection />
      <ContactSection />
    </div>
  );
}
