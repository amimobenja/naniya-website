import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE_DOMAIN, SITE_URL } from "@/lib/contact";

const PLAUSIBLE_DOMAIN =
  process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? SITE_DOMAIN;
const PLAUSIBLE_SCRIPT_SRC =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ??
  "https://plausible.io/js/script.file-downloads.hash.outbound-links.tagged-events.js";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2563eb',
};

export const metadata: Metadata = {
  title: "Naniya Technologies | African Insight. Global Standards.",
  description:
    "Naniya Technologies builds practical digital products and custom software for organisations in Africa and beyond.",
  keywords: [
    "Naniya Technologies",
    "Chama Platform",
    "chama management",
    "WhatsApp savings group",
    "M-PESA integration",
    "Kenya fintech",
    "WhatsApp business automation",
    "software development Kenya",
    "LipaClear",
    "M-PESA reconciliation",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Naniya Technologies — African Insight. Global Standards.",
    description: "Practical digital products and custom software for organisations in Africa and beyond, built in Nairobi.",
    url: SITE_URL,
    siteName: "Naniya Technologies",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naniya Technologies — African Insight. Global Standards.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naniya Technologies — African Insight. Global Standards.",
    description: "Practical digital products and custom software for organisations in Africa and beyond.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  authors: [{ name: 'Naniya Technologies Limited' }],
  creator: 'Naniya Technologies Limited',
  publisher: 'Naniya Technologies Limited',
  category: 'Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-sans">
        {children}
        <Script
          src={PLAUSIBLE_SCRIPT_SRC}
          data-domain={PLAUSIBLE_DOMAIN}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
