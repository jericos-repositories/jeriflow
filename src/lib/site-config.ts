import type { Metadata } from "next";

export const siteConfig = {
  name: "JeriFlow",
  studio: "Jerico Studio",
  title: "JeriFlow — Make room for better work",
  description:
    "Projects, tasks, notes, and creative momentum in one calm workspace. Make room for better work with JeriFlow by Jerico Studio.",
};

export const navigation = [
  { href: "/product", label: "Product" },
  { href: "/features", label: "Features" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function configuredSiteUrl(): URL | undefined {
  if (!process.env.SITE_URL) return undefined;
  const url = new URL(process.env.SITE_URL);
  if (
    !["https:", "http:"].includes(url.protocol) ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error(
      "SITE_URL must be an http(s) origin without a path, query, or credentials.",
    );
  }
  return url;
}
export const siteUrl = configuredSiteUrl();
export const allowIndexing =
  Boolean(siteUrl) && process.env.ALLOW_INDEXING === "true";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: { absolute: `${title} | JeriFlow` },
    description,
    ...(siteUrl
      ? { alternates: { canonical: new URL(path, siteUrl).href } }
      : {}),
    openGraph: {
      title: `${title} | JeriFlow`,
      description,
      type: "website",
      siteName: siteConfig.name,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "JeriFlow by Jerico Studio — Make room for better work.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | JeriFlow`,
      description,
      images: ["/opengraph-image"],
    },
  };
}
