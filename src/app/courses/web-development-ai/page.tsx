import { createMetadata } from "@/lib/seo";
import { COURSES_DATA } from "@/lib/courses-data";
import { CourseDetailView } from "@/components/sections/course-detail-view";
import { notFound } from "next/navigation";

const courseSlug = "web-development-ai";

export const metadata = createMetadata({
  title: "Web Development + AI Course in Ghaziabad | 6 Months Offline Coding Training",
  description:
    "Learn HTML5, CSS3, JavaScript, WordPress, Shopify, React/Next.js, and AI coding tools (Cursor, v0, Copilot). 100% offline classroom training in Ghaziabad with placement support.",
  path: `/courses/${courseSlug}`,
  keywords: [
    "Web development course in Ghaziabad",
    "Full stack web development offline Delhi NCR",
    "AI web development institute Sahibabad",
    "React Nextjs course Ghaziabad",
    "Shopify WordPress development institute",
    "coding classes with placement Ghaziabad",
  ],
});

export default function WebDevelopmentAIPage() {
  const course = COURSES_DATA[courseSlug];
  if (!course) notFound();

  return <CourseDetailView course={course} />;
}
