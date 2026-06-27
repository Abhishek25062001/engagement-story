import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-06-27T00:00:00+05:30"),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
