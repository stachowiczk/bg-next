import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import "./layout.css";
import React from "react";
import { Footer } from "./_components/footer";

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
              <a href="/">
                <Image
                  src="/favicon-32x32.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li className="link">
              <Link href="/o-mnie">O mnie</Link>
            </li>
            <li className="link">
              <Link href="/wspolpraca/konsultacje">Współpraca</Link>
            </li>
            <li className="link">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="link">
              <Link href="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>

        <div className={styles.section} style={{ borderBottom: "none" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
