import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { ProcessSection } from "@/components/sections/process-section";
import { CourseSection } from "@/components/sections/course-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | New Digital Era",
  description: "Explore our premium digital marketing services including SEO, PPC, Branding, Web Development, and Digital Marketing Courses.",
};

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
