import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rootd - The Modern Operating System for Indian Dental Clinics",
  description: "Transform your dental practice with Rootd's comprehensive practice management software. Secure EHR, multi-chair scheduling, digital clinical workflow, and seamless billing - all DPDP compliant.",
  keywords: "dental practice management, EHR, dental software, India, DPDP compliant, dental scheduling, clinical workflow",
  authors: [{ name: "Rootd Team" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "Rootd - The Modern Operating System for Indian Dental Clinics",
    description: "Transform your dental practice with Rootd's comprehensive practice management software. Secure EHR, multi-chair scheduling, digital clinical workflow, and seamless billing.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rootd - The Modern Operating System for Indian Dental Clinics",
    description: "Transform your dental practice with Rootd's comprehensive practice management software.",
  },
  robots: {
    index: true,
    follow: true,
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