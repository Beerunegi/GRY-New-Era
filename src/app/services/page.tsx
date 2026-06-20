import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { ProcessSection } from "@/components/sections/process-section";
import { CourseSection } from "@/components/sections/course-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Digital Marketing Services in Ghaziabad", description: "Explore SEO, AEO, GEO, Google Ads, social media, branding, analytics and website development services for Ghaziabad, Delhi NCR and India.", path: "/services", keywords: ["digital marketing services Ghaziabad", "online marketing company Delhi NCR", "SEO PPC web development Ghaziabad"] });

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHero />
      <div className="bg-muted/5">
        <ServicesSection />
      </div>
      <WhyUsSection />
      <ProcessSection />
      <CourseSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
