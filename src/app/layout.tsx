import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GuideOn Group - Virtual Assistant Demo",
  description: "GuideOn Group transportation and logistics virtual assistant. Get freight quotes, learn about carrier opportunities, and get answers about our services 24/7.",
  keywords: ["logistics", "freight", "transportation", "3PL", "carrier", "shipping"],
  openGraph: {
    title: "GuideOn Group - Virtual Assistant",
    description: "AI-powered virtual assistant for GuideOn Group transportation and logistics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
