import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Compassionate Palm Health Care | Compassionate Care, Stronger Community",
  description:
    "Compassionate Palm Health Care (CPHC) is an integrated, community-centered healthcare organization in Miami providing PrEP services, mental health support, addiction treatment, and weight loss programs to underserved communities.",
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
