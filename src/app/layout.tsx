import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naniya Technologies Limited | Chama Platform & Technology Solutions for Kenya",
  description:
    "Naniya Technologies builds Chama Platform — a WhatsApp-first savings group management tool for Kenya with M-PESA integration. Manage contributions, loans, and group finances through WhatsApp. No app download needed.",
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
  metadataBase: new URL("https://naniya.co.ke"),
  openGraph: {
    title: "Naniya Technologies — Chama Platform & Tech Solutions for Kenya",
    description: "Chama Platform: manage your savings group through WhatsApp with M-PESA integration. Built by Naniya Technologies in Nairobi, Kenya.",
    url: "https://naniya.co.ke",
    siteName: "Naniya Technologies",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naniya Technologies — Chama Platform & Tech Solutions for Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naniya Technologies — Chama Platform",
    description: "Manage your chama through WhatsApp with M-PESA integration. No app download needed.",
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
  other: {
    "theme-color": "#2563eb",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
