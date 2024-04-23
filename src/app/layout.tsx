import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto, Epilogue, Work_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import "./layout.css";
import React from "react";
import { Footer } from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const epilogue = Epilogue({ weight: "300", subsets: ["latin"] });
const work_sans = Work_Sans({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strona główna | BG",
  description: "BG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <div className="navbar">
          <ul>
            <li className="logo">
              <a href="/">
                <Image src="/logo_adw.jpg" alt="Logo" width={32} height={32} />
              </a>
            </li>
            <li className="link-left">
              <a href="/">Adwokat Beata Gruza</a>
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
        <div className={styles.container__all}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
