import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_URL = "https://crownfieldlocksmiths.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Emergency Locksmith London | Crownfield Locksmiths | 24/7",
    template: "%s | Crownfield Locksmiths London",
  },
  description:
    "24/7 emergency locksmith in London. Locked out? We arrive fast across all 32 boroughs. Residential, commercial & automotive. Upfront pricing, no call-out surprises. Call now.",
  keywords: [
    "emergency locksmith London",
    "locksmith London 24/7",
    "locked out London",
    "residential locksmith London",
    "commercial locksmith London",
    "UPVC door specialist London",
    "lock change London",
    "locksmith near me London",
  ],
  authors: [{ name: "Crownfield Locksmiths" }],
  creator: "Crownfield Locksmiths",
  publisher: "Crownfield Locksmiths",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Crownfield Locksmiths",
    title: "Emergency Locksmith London | 24/7 | Crownfield Locksmiths",
    description:
      "Locked out in London? We dispatch immediately across all 32 boroughs. Upfront pricing, non-destructive entry, available around the clock.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crownfield Locksmiths — 24/7 Emergency Locksmith London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Locksmith London | Crownfield Locksmiths",
    description:
      "Locked out in London? 24/7 emergency locksmith across all 32 boroughs. Call now.",
    images: ["/og-image.jpg"],
  },

  // ✅ Only needed if you are using URL Prefix verification (meta tag method).
  // If you verify Search Console via DNS (Domain property), you can REMOVE this entirely.
  verification: {
    // Replace this placeholder ONLY if you use URL Prefix verification.
    // google: "YOUR_URL_PREFIX_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className={inter.className}>
        <Providers>{children}</Providers>

        {/* ✅ Google Analytics (GA4) */}
        <GoogleAnalytics gaId="G-TW40WMKYRQ" />
      </body>
    </html>
  );
}
