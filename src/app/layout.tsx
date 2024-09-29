import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingNavbar } from "@/components/landing/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Standord AI Solutions",
  description: "Standord AI Solutions, Sri Lanks. We build great AI solutions for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        <FloatingNavbar />
      </div>
        {children}
      </body>
    </html>
  );
}
