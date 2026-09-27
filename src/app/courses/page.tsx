import { CoursePageHero } from "@/components/sections/course-page-hero";
import { HomeCoursesGrid } from "@/components/sections/home-courses-grid";
import { CourseCurriculum } from "@/components/sections/course-curriculum";
import { CourseFeatures } from "@/components/sections/course-features";
import { CourseRegistrationForm } from "@/components/sections/course-registration-form";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Offline Digital Marketing & AI Courses in Ghaziabad",
  description:
    "Explore our 7 offline classroom programs in Digital Marketing, Web Development, SEO, AEO, GEO, and AI Automation at New Digital Era Academy Ghaziabad.",
  path: "/courses",
  keywords: [
    "digital marketing course in Ghaziabad",
    "digital marketing institute Ghaziabad",
    "SEO course Sahibabad",
    "offline marketing course Delhi NCR",
    "web development institute Ghaziabad",
  ],
});

export default function CoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CoursePageHero />
      <HomeCoursesGrid />
      <CourseCurriculum />
      <CourseFeatures />
      <TestimonialsSection />
      <CourseRegistrationForm />
      <CTASection />
    </div>
  );
}
