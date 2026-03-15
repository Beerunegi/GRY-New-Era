import { CoursePageHero } from "@/components/sections/course-page-hero";
import { CoursePrograms } from "@/components/sections/course-programs";
import { CourseCurriculum } from "@/components/sections/course-curriculum";
import { CourseFeatures } from "@/components/sections/course-features";
import { CourseRegistrationForm } from "@/components/sections/course-registration-form";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Courses | New Digital Era Academy",
  description: "Join the best offline digital marketing courses in Ghaziabad. We offer 3-month, 6-month, and 1-year professional programs with 100% placement support.",
};

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
