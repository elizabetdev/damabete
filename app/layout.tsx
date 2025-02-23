import type { Metadata } from "next/types";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Permanent_Marker } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-marker",
});

const heading = localFont({
  src: "./fonts/miedinger-w01-bold.ttf",
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dama Bete - A primeira dama do rap",
  description: "Dama Bete: Rapper, Award-Winning Design Engineer, Tech Speaker",
  openGraph: {
    images: [
      {
        url: "https://damabete.com/open-graph.png",
        alt: "Dama Bete - A primeira dama do rap",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${heading.variable} ${permanentMarker.variable}`}
      >
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
