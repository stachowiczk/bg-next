import React from "react";
import Link from "next/link";
import styles from "./components.module.css";
export function CollabSidebar() {
  return (
    <div>
      <ul className={styles.list}>
        <li>
            <Link href="/wspolpraca/konsultacje">Konsultacje</Link>
        </li>
        <li>
            <Link href="/wspolpraca/szkolenia">Szkolenia</Link>
        </li>
        <li>
            <Link href="/wspolpraca/opinie-i-ekspertyzy">Opinie i Ekspertyzy</Link>
        </li>
        <li>
            <Link href="/wspolpraca/stala-wspolpraca">Stała współpraca</Link>
        </li>
        <li>
            <Link href="/wspolpraca/pisma">Pisma</Link>
        </li>
        <li>
            <Link href="/wspolpraca/regulaminy">Regulaminy</Link>
        </li>
      </ul>
    </div>
  );
}
