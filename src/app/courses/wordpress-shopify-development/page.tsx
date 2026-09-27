import { createMetadata } from "@/lib/seo";
import { COURSES_DATA } from "@/lib/courses-data";
import { CourseDetailView } from "@/components/sections/course-detail-view";
import { notFound } from "next/navigation";

const courseSlug = "wordpress-shopify-development";

export const metadata = createMetadata({
  title: "WordPress + Shopify Development Course in Ghaziabad | 6 Months Offline",
  description:
    "Master custom WordPress themes, Gutenberg blocks, WooCommerce, Shopify Liquid coding, payment gateways, e-commerce CRO, and sub-2s speed optimization. 100% offline classroom in Ghaziabad.",
  path: `/courses/${courseSlug}`,
  keywords: [
    "WordPress development course in Ghaziabad",
    "Shopify store developer training Delhi NCR",
    "Shopify Liquid coding institute Sahibabad",
    "WooCommerce website development classes",
    "E-commerce website design course Ghaziabad",
    "CMS developer training with placement",
  ],
});

export default function WordPressShopifyPage() {
  const course = COURSES_DATA[courseSlug];
  if (!course) notFound();

  return <CourseDetailView course={course} />;
}
