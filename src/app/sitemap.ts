import type { MetadataRoute } from "next";
import { getMetadataBase, getSitemapRoutes } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const metadataBase = getMetadataBase().toString();
  
  // App router static routes
  const routes = getSitemapRoutes().map(({ path, lastModified }) => ({
    url: `${metadataBase}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly" as "weekly" | "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  // Blog dynamic routes
  const posts = getAllPosts(['slug', 'date']);
  const blogRoutes = posts.map((post) => ({
    url: `${metadataBase}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as "monthly",
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
