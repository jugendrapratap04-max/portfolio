import type { MetadataRoute } from "next";
import { config } from "@/config/portfolio.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || config.seo.siteUrl;
  return [{ url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
