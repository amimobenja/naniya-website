import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naniya Technologies Limited | Technology Solutions for Africa",
  description:
    "Naniya Technologies Limited is a Kenyan technology company providing innovative digital solutions including WhatsApp business automation, mobile money integration, and custom software development.",
  keywords: [
    "Naniya Technologies",
    "technology solutions Kenya",
    "WhatsApp business automation",
    "M-PESA integration",
    "software development Kenya",
    "digital transformation Africa",
  ],
  metadataBase: new URL("https://naniya.co.ke"),
  openGraph: {
    title: "Naniya Technologies Limited",
    description: "Innovative technology solutions for African businesses",
    url: "https://naniya.co.ke",
    siteName: "Naniya Technologies",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naniya Technologies — Technology Solutions for Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naniya Technologies Limited",
    description: "Innovative technology solutions for African businesses",
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
