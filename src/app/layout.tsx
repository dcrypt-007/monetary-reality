import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://monetaryreality.com";
const SITE_NAME = "Monetary Reality";
const SITE_DESCRIPTION =
  "A data-driven public educational resource exploring how monetary expansion, deficit spending, and credit systems drive persistent price increases.";

export const viewport: Viewport = {
  themeColor: "#1c1917",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Monetary Reality — Understanding Why Prices Rise",
    template: "%s — Monetary Reality",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "inflation",
    "monetary policy",
    "money supply",
    "purchasing power",
    "Federal Reserve",
    "quantitative easing",
    "fractional reserve banking",
    "asset inflation",
    "CPI",
    "cost of living",
    "deficit spending",
    "currency debasement",
    "hyperinflation",
    "Cantillon effect",
    "monetary expansion",
    "central banking",
    "economic education",
  ],
  authors: [{ name: "Monetary Reality" }],
  creator: "Monetary Reality",
  publisher: "Monetary Reality",
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
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Monetary Reality — Understanding Why Prices Rise",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Monetary Reality — Understanding Why Prices Rise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monetary Reality — Understanding Why Prices Rise",
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
