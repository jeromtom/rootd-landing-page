import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rootd.app'),
  title: 'rootd.app - The Modern Operating System for Indian Dental Clinics',
  description: "Transform your dental practice with rootd.app's comprehensive practice management software. Secure EHR, multi-chair scheduling, digital clinical workflow, and seamless billing - all DPDP compliant.",
  keywords: "dental practice management, EHR, dental software, India, DPDP compliant, dental scheduling, clinical workflow, dental clinic management, practice management software",
  authors: [{ name: "rootd.app Team" }],
  creator: "rootd.app",
  publisher: "rootd.app",
  applicationName: "rootd.app",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
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
    title: "rootd.app - The Modern Operating System for Indian Dental Clinics",
    description: "Transform your dental practice with rootd.app's comprehensive practice management software. Secure EHR, multi-chair scheduling, digital clinical workflow, and seamless billing.",
    type: "website",
    locale: "en_IN",
    siteName: "rootd.app",
    url: "https://rootd.app",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "rootd.app - Dental Practice Management Software"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "rootd.app - The Modern Operating System for Indian Dental Clinics",
    description: "Transform your dental practice with rootd.app's comprehensive practice management software.",
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
    canonical: "https://rootd.app",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "rootd.app",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml",
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#2563eb',
    colorScheme: 'light',
  };
}

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