import type { MetadataRoute } from "next";
import { allowIndexing, siteUrl } from "@/lib/site-config";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(allowIndexing
        ? { allow: "/", disallow: "/docs/" }
        : { disallow: "/" }),
    },
    ...(allowIndexing && siteUrl
      ? { sitemap: new URL("/sitemap.xml", siteUrl).href }
      : {}),
  };
}
