import { readdirSync, statSync } from "node:fs";
import { join, posix } from "node:path";

const APP_DIRECTORY = join(process.cwd(), "src", "app");
const PAGE_FILE_NAME = "page.tsx";

type RouteEntry = {
  path: string;
  lastModified: Date;
};

function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    "http://localhost:3000";

  return configuredUrl.endsWith("/")
    ? configuredUrl.slice(0, -1)
    : configuredUrl;
}

function isPublicSegment(segment: string) {
  return (
    segment !== "" &&
    !segment.startsWith("_") &&
    !segment.startsWith("[") &&
    segment !== "api"
  );
}

function walkAppDirectory(currentDirectory: string, segments: string[] = []): RouteEntry[] {
  const entries = readdirSync(currentDirectory, { withFileTypes: true });
  const routes: RouteEntry[] = [];

  for (const entry of entries) {
    const fullPath = join(currentDirectory, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.startsWith("(") && entry.name.endsWith(")")) {
        routes.push(...walkAppDirectory(fullPath, segments));
        continue;
      }

      if (!isPublicSegment(entry.name)) {
        continue;
      }

      routes.push(...walkAppDirectory(fullPath, [...segments, entry.name]));
      continue;
    }

    if (!entry.isFile() || entry.name !== PAGE_FILE_NAME) {
      continue;
    }

    const routePath = segments.length === 0 ? "/" : `/${posix.join(...segments)}`;
    routes.push({
      path: routePath,
      lastModified: statSync(fullPath).mtime,
    });
  }

  return routes;
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}

export function getSitemapRoutes() {
  return walkAppDirectory(APP_DIRECTORY).sort((a, b) => a.path.localeCompare(b.path));
}
