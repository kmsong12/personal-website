import type { Metadata } from "next";
import { Caveat, Nunito } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joshua Song",
  description: "Robotics researcher and engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${caveat.variable}`}>
      <body>
        <Navbar />

        <div className="siteLayout">
          <Sidebar />

          <main className="mainContent">{children}</main>
        </div>
      </body>
    </html>
  );
}
