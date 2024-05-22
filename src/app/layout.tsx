import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import "./layout.css";
import { Footer } from "./_components/footer";

//const inter = Inter({ subsets: ["latin"] });
//const roboto = Roboto({ weight: "400", subsets: ["latin"] });
//const epilogue = Epilogue({ weight: "300", subsets: ["latin"] });
const work_sans = Work_Sans({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strona główna | BG",
  description: "Kancelaria Adwokacka Beata Gruza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="ts5HUM7Wxd204-HzlDtyADV4LqjgFgf5OQRxE1zDcV0" />
      <body className={work_sans.className}>
        <div className="navbar">
          <div className="navbar-row">
            <ul>
              <li className="logo">
                <a href="/">
                  <Image
                    src="/logo_adw.jpg"
                    alt="Logo"
                    width={32}
                    height={32}
                  />
                </a>
              </li>
              <li className="link-left">
                <a href="/">Adwokat Beata Gruza</a>
              </li>
            </ul>
          </div>
          <div className="navbar-row">
            <ul>
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
                <Link href="/#kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.container__all}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
