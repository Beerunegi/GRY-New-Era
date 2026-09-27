import { createMetadata } from "@/lib/seo";
import { COURSES_DATA } from "@/lib/courses-data";
import { CourseDetailView } from "@/components/sections/course-detail-view";
import { notFound } from "next/navigation";

const courseSlug = "social-media-content-marketing";

export const metadata = createMetadata({
  title: "Social Media & Content Marketing Course in Ghaziabad | 3 Months Offline",
  description:
    "Master viral Reels & Shorts, copywriting, content calendars, CapCut video editing, and AI creative tools (ChatGPT, Midjourney). 100% offline classroom training in Ghaziabad.",
  path: `/courses/${courseSlug}`,
  keywords: [
    "Social media marketing course Ghaziabad",
    "Content marketing training Delhi NCR",
    "Reels and video editing course Sahibabad",
    "Copywriting and personal branding classes",
    "Instagram marketing institute Ghaziabad",
    "Freelance social media manager training",
  ],
});

export default function SocialMediaContentPage() {
  const course = COURSES_DATA[courseSlug];
  if (!course) notFound();

  return <CourseDetailView course={course} />;
}
