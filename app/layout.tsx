import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F5F1E8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Landora Studio — We find where you're leaking. Then we fix it.",
    template: "%s | Landora Studio",
  },
  description:
    "You don't need more marketing. You need the leak found. Landora diagnoses and plugs revenue leaks across websites, paid ads, SEO, and retention for South African businesses.",
  keywords: [
    "digital marketing studio South Africa",
    "leak audit",
    "funnel audit South Africa",
    "conversion rate optimization",
    "Cape Town digital marketing",
    "Johannesburg digital marketing",
    "high conversion landing page",
    "paid ads South Africa",
    "local SEO South Africa",
    "booking website South Africa",
  ],
  authors: [{ name: "Landora Studio" }],
  creator: "Landora Studio",
  publisher: "Landora Studio",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Landora Studio",
    title: "Landora Studio — We find where you're leaking. Then we fix it.",
    description:
      "You don't need more marketing. You need the leak found. Landora diagnoses and plugs revenue leaks across websites, paid ads, SEO, and retention for South African businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Landora Studio — We find where you're leaking. Then we fix it.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landora Studio — We find where you're leaking. Then we fix it.",
    description:
      "You don't need more marketing. You need the leak found. Landora diagnoses and plugs revenue leaks across websites, paid ads, SEO, and retention for South African businesses.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/landora-icon-dark.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Landora Studio",
  url: siteUrl,
  logo: `${siteUrl}/landora-mark.svg`,
  image: `${siteUrl}/og-image.jpg`,
  description:
    "We find where you're leaking. Then we fix it. Diagnostic leak audits and precision fixes across websites, paid ads, SEO, and retention.",
  priceRange: "Starting from R1650",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
    addressRegion: "Western Cape / Gauteng",
  },
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Studio Pipeline Leak Diagnostic & Fixes",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Diagnostic Pipeline Leak Audit",
        price: "0",
        priceCurrency: "ZAR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description:
          "Comprehensive 100% free 4-surface diagnostic across websites, paid ads, organic search, and retention loops.",
      },
      {
        "@type": "Offer",
        name: "Studio Pipeline Fixes",
        price: "1650",
        priceCurrency: "ZAR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description:
          "Precision studio fixes starting from R1650 across websites, paid acquisition, local SEO, and customer retention.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-ZA"
      className={`${fraunces.variable} ${interTight.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
