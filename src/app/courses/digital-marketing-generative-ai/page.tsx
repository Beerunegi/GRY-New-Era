import { createMetadata } from "@/lib/seo";
import { COURSES_DATA } from "@/lib/courses-data";
import { CourseDetailView } from "@/components/sections/course-detail-view";
import { notFound } from "next/navigation";

const courseSlug = "digital-marketing-generative-ai";

export const metadata = createMetadata({
  title: "Digital Marketing + Generative AI Course in Ghaziabad | 6 Months Offline",
  description:
    "Master full-funnel digital marketing, Google Ads, Meta Ads, SEO, and Generative AI (ChatGPT, Claude, Midjourney). 100% offline classroom training in Ghaziabad with placement assistance.",
  path: `/courses/${courseSlug}`,
  keywords: [
    "Digital marketing course in Ghaziabad",
    "Generative AI digital marketing training",
    "Google Ads institute Ghaziabad",
    "Meta Ads course Delhi NCR",
    "digital marketing offline classes Sahibabad",
    "digital marketing institute with placement",
  ],
});

export default function DigitalMarketingAIPage() {
  const course = COURSES_DATA[courseSlug];
  if (!course) notFound();

  return <CourseDetailView course={course} />;
}
