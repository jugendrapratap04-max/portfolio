import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { config } from "@/config/portfolio.config";
import { ThemeProvider } from "@/components/common/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || config.seo.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: config.seo.title,
  description: config.seo.description,
  keywords: config.seo.keywords,
  authors: [{ name: config.seo.author }],
  creator: config.seo.author,
  robots: config.seo.robots,
  icons: { icon: config.seo.favicon },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: config.seo.title,
    description: config.seo.description,
    siteName: config.personal.name,
    images: [{ url: config.seo.ogImage, width: 1200, height: 630, alt: config.personal.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.title,
    description: config.seo.description,
    images: [config.seo.ogImage],
    creator: config.seo.twitterHandle || undefined,
  },
};

export const viewport: Viewport = {
  themeColor: config.theme.background,
  width: "device-width",
  initialScale: 1,
};

// JSON-LD structured data for rich search results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: config.personal.name,
  jobTitle: config.personal.headline,
  email: config.personal.email,
  address: config.personal.location,
  url: siteUrl,
  sameAs: config.socials.filter((s) => s.enabled !== false && !s.url.startsWith("<") && s.url.startsWith("http")).map((s) => s.url),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
