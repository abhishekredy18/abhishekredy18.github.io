import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getAllProjects } from "@/lib/content";

// Required for output: "export".
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Legacy .html URLs are deliberately absent — they are noindex redirect
  // stubs now.
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...getAllProjects().map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
