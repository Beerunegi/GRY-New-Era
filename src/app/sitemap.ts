import type { MetadataRoute } from "next";
import { getMetadataBase, getSitemapRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const metadataBase = getMetadataBase().toString();

  return getSitemapRoutes().map(({ path, lastModified }) => ({
    url: `${metadataBase}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
