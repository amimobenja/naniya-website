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
  openGraph: {
    title: "Naniya Technologies Limited",
    description: "Innovative technology solutions for African businesses",
    url: "https://naniya.co.ke",
    siteName: "Naniya Technologies",
    locale: "en_KE",
    type: "website",
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
