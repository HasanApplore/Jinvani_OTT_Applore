import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed from Geist to Inter
import "./globals.css";

// Using Inter as a substitute for SF Pro
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jinvani OTT",
  description: "Advanced OTT Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
