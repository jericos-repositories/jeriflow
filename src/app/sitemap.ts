import type { MetadataRoute } from "next";
import { allowIndexing, navigation, siteUrl } from "@/lib/site-config";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl || !allowIndexing) return [];
  return ["/", ...navigation.map((item) => item.href)].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
