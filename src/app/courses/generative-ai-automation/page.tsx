import { createMetadata } from "@/lib/seo";
import { COURSES_DATA } from "@/lib/courses-data";
import { CourseDetailView } from "@/components/sections/course-detail-view";
import { notFound } from "next/navigation";

const courseSlug = "generative-ai-automation";

export const metadata = createMetadata({
  title: "Generative AI + AI Automation Course in Ghaziabad | 6 Months Offline Mastery",
  description:
    "Learn advanced prompt engineering, Midjourney, ElevenLabs, Runway video, Make.com, Zapier, autonomous AI agents (CrewAI), LLM APIs, and business process automation. 100% offline classroom training in Ghaziabad.",
  path: `/courses/${courseSlug}`,
  keywords: [
    "Generative AI course in Ghaziabad",
    "AI automation training Delhi NCR",
    "Make.com Zapier automation institute Sahibabad",
    "Prompt engineering certification course",
    "AI agents CrewAI classes Ghaziabad",
    "Applied AI for business operations",
  ],
});

export default function GenerativeAIAutomationPage() {
  const course = COURSES_DATA[courseSlug];
  if (!course) notFound();

  return <CourseDetailView course={course} />;
}
