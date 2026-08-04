import type { Metadata } from "next";
import { Funnel_Sans, Lora } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

/** Warm serif for headings and pull quotes. */
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

/** Open, clinical sans for body copy and interface text. */
const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
  display: "swap",
});

const pageTitle = `${siteConfig.name} | ${siteConfig.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon1.png",
    apple: "/logo1.png",
  },
  openGraph: {
    title: pageTitle,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/logofull1.png", alt: `${siteConfig.name} logo` }],
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: siteConfig.description,
    images: ["/logofull1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Next 16 no longer overrides scroll-behavior during navigation on its
      // own. Without this, the smooth scrolling we want for in-page anchors
      // also animates route changes, which can leave you mid-page.
      data-scroll-behavior="smooth"
      className={`${lora.variable} ${funnelSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only rounded-lg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
