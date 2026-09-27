import { createMetadata } from "@/lib/seo";
import { COURSES_DATA } from "@/lib/courses-data";
import { CourseDetailView } from "@/components/sections/course-detail-view";
import { notFound } from "next/navigation";

const courseSlug = "seo-aeo-geo";

export const metadata = createMetadata({
  title: "SEO + AEO + GEO Course in Ghaziabad | 6 Months Specialist Search Mastery",
  description:
    "Master enterprise SEO, Technical SEO, Core Web Vitals, Google Maps 3-Pack, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO for Perplexity & ChatGPT Search). 100% offline in Ghaziabad.",
  path: `/courses/${courseSlug}`,
  keywords: [
    "SEO course in Ghaziabad",
    "Technical SEO institute Delhi NCR",
    "AEO Answer Engine Optimization course",
    "GEO Generative Engine Optimization training",
    "Local SEO Google Business Profile classes Sahibabad",
    "AI Search Perplexity SEO course",
  ],
});

export default function SEOAEOGEOPage() {
  const course = COURSES_DATA[courseSlug];
  if (!course) notFound();

  return <CourseDetailView course={course} />;
}
