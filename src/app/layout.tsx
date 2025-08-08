import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coding Open Page",
  description: "Coding Open Page - Created by Julian Luczywo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oxanium.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
