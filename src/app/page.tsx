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
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";

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
      <CTASection />
      <ContactSection />
    </>
  );
}
