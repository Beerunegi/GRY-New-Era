import { ContactHero } from "@/components/sections/contact-hero";
import { ContactSection } from "@/components/sections/contact-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Contact Our Digital Marketing Agency in Ghaziabad", description: "Contact New Digital Era in Sahibabad, Ghaziabad for SEO, AEO, GEO, Google Ads, social media and website development consultations across Delhi NCR.", path: "/contact", keywords: ["digital marketing agency Ghaziabad contact", "SEO agency Sahibabad", "digital marketing consultation Delhi NCR"] });

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactHero />
      {/* Reusing our robust contact section that contains the actual form */}
      <div className="pb-16 bg-background">
        <ContactSection />
      </div>
    </div>
  );
}
