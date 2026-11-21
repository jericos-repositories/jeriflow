import type { Metadata } from "next";
import localFont from "next/font/local";
import { allowIndexing, siteConfig, siteUrl } from "@/lib/site-config";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const inter = localFont({
  src: "../../public/assets/fonts/inter-latin-variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: siteConfig.title, template: "%s | JeriFlow" },
  description: siteConfig.description,
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  robots: { index: allowIndexing, follow: allowIndexing },
  icons: { icon: "/assets/brand/jeriflow-mark.svg" },
  twitter: { card: "summary_large_image" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
