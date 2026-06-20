import type { MetadataRoute } from "next";
import { getMetadataBase, getSitemapRoutes } from "@/lib/site";
import { getPosts } from "@/lib/wordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const metadataBase = getMetadataBase().toString();
  
  // App router static routes
  const routes = getSitemapRoutes().map(({ path, lastModified }) => ({
    url: `${metadataBase}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly" as "weekly" | "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  // Blog dynamic routes
  const posts = await getPosts({ perPage: 100 });
  const blogRoutes = posts.map((post) => ({
    url: `${metadataBase}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
