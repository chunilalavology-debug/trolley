import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Etrolley | Advertising & Merchandising Agency",
  description:
    "Premium advertising and merchandising agency. Brand identity, campaigns, custom merchandise, and digital experiences—from concept to delivery.",
  keywords: [
    "advertising agency",
    "merchandising",
    "branding",
    "Colombia",
    "creative agency",
  ],
  openGraph: {
    title: "Etrolley | Advertising & Merchandising Agency",
    description:
      "Give life to your brand with products and campaigns that speak for you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
