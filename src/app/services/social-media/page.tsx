import { SMHero } from "@/components/sections/sm-hero";
import { SMServicesGrid } from "@/components/sections/sm-services-grid";
import { SMProcess } from "@/components/sections/sm-process";
import { SMCaseStudies } from "@/components/sections/sm-case-studies";
import { SMFAQ } from "@/components/sections/sm-faq";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Social Media Marketing Agency in Ghaziabad", description: "Build awareness, community and sales with social media strategy, content, paid campaigns and creator marketing from our Ghaziabad team.", path: "/services/social-media", keywords: ["social media marketing Ghaziabad", "social media agency Delhi NCR", "Instagram marketing Ghaziabad"] });

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
