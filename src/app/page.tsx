import { AcademyHero } from "@/components/sections/academy-hero";
import { HomeCoursesGrid } from "@/components/sections/home-courses-grid";
import { CourseFeatures } from "@/components/sections/course-features";
import { AcademyMethodology } from "@/components/sections/academy-methodology";
import { AcademyToolsStack } from "@/components/sections/academy-tools-stack";
import { PartnersSection } from "@/components/sections/partners-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AcademyFAQ } from "@/components/sections/academy-faq";
import { CourseRegistrationForm } from "@/components/sections/course-registration-form";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Digital Marketing & AI Courses in Ghaziabad | 100% Offline Training",
  description:
    "Launch your career with practical offline courses in Digital Marketing, Web Development, Generative AI, SEO, and Performance Marketing at New Digital Era Academy Ghaziabad with 100% placement support.",
  path: "/",
  keywords: [
    "digital marketing course in Ghaziabad",
    "web development course Delhi NCR",
    "AI automation institute Ghaziabad",
    "SEO training institute Sahibabad",
    "offline digital marketing classes Ghaziabad",
    "performance marketing course Delhi NCR",
  ],
});

export default function Home() {
  return (
    <>
      <AcademyHero />
      <HomeCoursesGrid />
      <CourseFeatures />
      <AcademyMethodology />
      <AcademyToolsStack />
      <PartnersSection />
      <TestimonialsSection />
      <AcademyFAQ />
      <CourseRegistrationForm />
      <CTASection />
    </>
  );
}
