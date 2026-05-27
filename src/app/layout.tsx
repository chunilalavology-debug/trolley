import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "E-Trolley | Your store ready in a minute",
  description:
    "E-Trolley is a Qatari e-commerce platform. Build your online store in no more than a minute.",
  keywords: ["E-Trolley", "e-commerce", "online store", "Qatar", "etrolley"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <Header />
          <main className="min-h-screen w-full">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
