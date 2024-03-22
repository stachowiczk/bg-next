import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "./layout.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BG",
  description: "BG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <ul>
            <li className="logo">
              <a href="/">BG</a>
            </li>
            <li className="link"> 
              <Link href="/about">O mnie</Link>
            </li>
            <li className="link">
              <Link href="/wspolpraca">Współpraca</Link>
            </li>
            <li className="link">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="link">
              <Link href="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>

        <div>
        {children}
        </div>
        </body>

    </html>
  );
}
