import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dama Bete",
  description:
    "Official website of Dama Bete: Rapper, Award-Winning Design Engineer, Tech Speaker",
};

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
        </div>
      </body>
    </html>
  );
}
