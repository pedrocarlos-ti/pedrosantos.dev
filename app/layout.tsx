import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import {
  generatePersonStructuredData,
  generateWebSiteStructuredData,
} from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pedro Santos | Software Engineer & Melro.io Founder",
    template: "%s | Pedro Santos",
  },
  description:
    "Software Engineer building AI-powered web experiences with React, Next.js, and modern technologies. Founder of Melro.io, providing AI-powered solutions for businesses. Available for new projects.",
  keywords: [
    "Pedro Santos",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "AI Integration",
    "Web Development",
    "Portugal",
    "Melro.io",
    "Portfolio",
    "Full Stack Developer",
    "TypeScript",
  ],
  authors: [{ name: "Pedro Santos" }],
  creator: "Pedro Santos",
  publisher: "Pedro Santos",
  metadataBase: new URL("https://pedrosantos.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pedrosantos.dev",
    siteName: "Pedro Santos - Portfolio",
    title: "Pedro Santos | Software Engineer & Melro.io Founder",
    description:
      "Software Engineer building AI-powered web experiences with React, Next.js, and modern technologies. Founder of Melro.io.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pedro Santos - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Santos | Software Engineer & Melro.io Founder",
    description:
      "Software Engineer building AI-powered web experiences with React, Next.js, and modern technologies.",
    creator: "@pcgs_tsx",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebSiteStructuredData();

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
