import { CoursePageHero } from "@/components/sections/course-page-hero";
import { CoursePrograms } from "@/components/sections/course-programs";
import { CourseCurriculum } from "@/components/sections/course-curriculum";
import { CourseFeatures } from "@/components/sections/course-features";
import { CourseRegistrationForm } from "@/components/sections/course-registration-form";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Digital Marketing Course in Ghaziabad", description: "Learn SEO, Google Ads, social media, analytics and AI marketing through practical offline digital marketing courses in Ghaziabad with career support.", path: "/courses", keywords: ["digital marketing course in Ghaziabad", "digital marketing institute Ghaziabad", "SEO course Sahibabad", "offline marketing course Delhi NCR"] });

export default function CoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CoursePageHero />
      <CoursePrograms />
      <CourseCurriculum />
      <CourseFeatures />
      <TestimonialsSection />
      <CourseRegistrationForm />
      <CTASection />
    </div>
  );
}
