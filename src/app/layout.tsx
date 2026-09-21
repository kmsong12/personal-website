import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

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
      <html lang="en">
        <body>
          <Navbar />

          <div className="siteLayout">
            <Sidebar />

            <main className="mainContent">
              {children}
            </main>
          </div>
        </body>
      </html>
    );
}