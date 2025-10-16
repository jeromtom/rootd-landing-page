import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rootd - The Modern Operating System for Indian Dental Clinics",
  description: "Transform your dental practice with Rootd's comprehensive practice management software. Secure EHR, multi-chair scheduling, digital clinical workflow, and seamless billing - all DPDP compliant.",
  keywords: "dental practice management, EHR, dental software, India, DPDP compliant, dental scheduling, clinical workflow, dental clinic management, practice management software",
  authors: [{ name: "Rootd Team" }],
  creator: "Rootd",
  publisher: "Rootd",
  applicationName: "Rootd",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#2563eb",
  colorScheme: "light",
  category: "healthcare",
  classification: "Dental Practice Management Software",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.ico", color: "#2563eb" }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Rootd - The Modern Operating System for Indian Dental Clinics",
    description: "Transform your dental practice with Rootd's comprehensive practice management software. Secure EHR, multi-chair scheduling, digital clinical workflow, and seamless billing.",
    type: "website",
    locale: "en_IN",
    siteName: "Rootd",
    url: "https://rootd.in",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Rootd - Dental Practice Management Software"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rootd - The Modern Operating System for Indian Dental Clinics",
    description: "Transform your dental practice with Rootd's comprehensive practice management software.",
    images: ["/android-chrome-512x512.png"],
    creator: "@rootd",
    site: "@rootd"
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
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://rootd.in",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Rootd",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full">
      <body className={`${inter.className} w-full overflow-x-hidden`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}