import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/app/components/global/Header"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Leading Web Investigation Platform | Authentic8 Silo",
  description: "Conduct secure, anonymous online investigations without revealing analyst identity or intent. Blend in, isolate browsing and improve productivity. Get a demo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
              <main className="max-w-[2500px] mx-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
