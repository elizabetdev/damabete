import type { Metadata } from "next/types";
import { inter } from "@/utils/fonts";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Dama Bete",
  description: "Dama Bete: Rapper, Award-Winning Design Engineer, Tech Speaker",
};

const gaId = (process.env.NEXT_PUBLIC_GA_ID as string) || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="relative flex min-h-screen flex-col w-full overflow-hidden">
          <Header />
          <div className="absolute inset-0 bg-noise opacity-30 z-20 pointer-events-none"></div>
          {children}
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
