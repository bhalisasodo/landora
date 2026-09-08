import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
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
  metadataBase: new URL("https://landora.launchgremlin.com"),
  title: {
    default: "Landora — One link that turns lookers into bookers.",
    template: "%s | Landora",
  },
  description:
    "You don't need a prettier website. You need one that closes. Single-link booking-first landing pages for South African service businesses. R1650 once. Live in days.",
  keywords: [
    "landing page South Africa",
    "booking website South Africa",
    "Cape Town web design",
    "Johannesburg web design",
    "conversion rate optimization",
    "spa booking page",
    "restaurant reservations landing page",
    "barbershop booking system",
    "physiotherapy booking page",
    "fitness studio booking page",
    "single link website",
  ],
  authors: [{ name: "Landora" }],
  creator: "Landora",
  publisher: "Landora",
  alternates: {
    canonical: "https://landora.launchgremlin.com",
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
    url: "https://landora.launchgremlin.com",
    siteName: "Landora",
    title: "Landora — One link that turns lookers into bookers.",
    description:
      "You don't need a prettier website. You need one that closes. Single-link booking-first landing pages for South African service businesses. R1650 once.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Landora — One link that turns lookers into bookers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landora — One link that turns lookers into bookers.",
    description:
      "You don't need a prettier website. You need one that closes. Single-link booking-first landing pages for South African service businesses. R1650 once.",
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
  name: "Landora",
  url: "https://landora.launchgremlin.com",
  logo: "https://landora.launchgremlin.com/landora-mark.svg",
  image: "https://landora.launchgremlin.com/og-image.jpg",
  description:
    "Booking-first landing pages for South African service businesses. One focused link that turns lookers into bookers.",
  priceRange: "R1650",
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
    name: "Single-Link Landing Page Builds",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Single-Link Conversion Build",
        price: "1650",
        priceCurrency: "ZAR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description:
          "Custom conversion-engineered single-link landing page with WhatsApp brief handoff and mobile-first speed.",
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
