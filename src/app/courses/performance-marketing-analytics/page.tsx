import { createMetadata } from "@/lib/seo";
import { COURSES_DATA } from "@/lib/courses-data";
import { CourseDetailView } from "@/components/sections/course-detail-view";
import { notFound } from "next/navigation";

const courseSlug = "performance-marketing-analytics";

export const metadata = createMetadata({
  title: "Performance Marketing & Marketing Analytics Course in Ghaziabad | 3 Months",
  description:
    "Master Google Ads scaling, Meta Advantage+, GTM event tracking, GA4 explorations, server-side CAPI, and Looker Studio dashboards. 100% offline classroom training in Ghaziabad.",
  path: `/courses/${courseSlug}`,
  keywords: [
    "Performance marketing course Ghaziabad",
    "Paid media buyer training Delhi NCR",
    "Google Tag Manager GA4 classes Sahibabad",
    "Meta ads scaling course",
    "Marketing analytics training institute",
    "Looker studio reporting course Ghaziabad",
  ],
});

export default function PerformanceMarketingPage() {
  const course = COURSES_DATA[courseSlug];
  if (!course) notFound();

  return <CourseDetailView course={course} />;
}
