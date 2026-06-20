import { Hero } from "@/components/sections/hero";
import { ClientsMarquee } from "@/components/sections/clients-marquee";
import { ServicesSection } from "@/components/sections/services-section";
import { CourseSection } from "@/components/sections/course-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BlogSection } from "@/components/sections/blog-section";
import { HomeFAQ } from "@/components/sections/home-faq";
import { AuditSection } from "@/components/sections/audit-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Digital Marketing Agency in Ghaziabad",
  description: "Grow with a results-driven digital marketing agency in Ghaziabad. New Digital Era delivers SEO, AEO, GEO, PPC, social media and website development across Delhi NCR.",
  path: "/",
  keywords: ["digital marketing agency in Ghaziabad", "SEO company Ghaziabad", "digital marketing Delhi NCR", "AEO agency India", "GEO services India"],
});

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <ServicesSection />
      <CourseSection />
      <WhyUsSection />
      <PartnersSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <BlogSection />
      <HomeFAQ />
      <AuditSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
