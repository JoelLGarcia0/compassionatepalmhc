import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Compassionate Palm Health Care | Compassionate Care, Stronger Community",
  description:
    "Compassionate Palm Health Care provides quality, affordable healthcare services to our community. Primary care, behavioral health, dental, and more.",
  icons: {
    icon: "/favicon1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
