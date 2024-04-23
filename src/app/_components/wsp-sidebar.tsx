import React from "react";
import Link from "next/link";
import styles from "./components.module.css";
export function CollabSidebar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.list}>
        <li>
          <Link href="/wspolpraca/konsultacje">Konsultacje</Link>
        </li>
        <li>
          <Link href="/wspolpraca/szkolenia">Szkolenia</Link>
        </li>
        <li>
          <Link href="/wspolpraca/opinie-i-ekspertyzy">
            Opinie i Ekspertyzy
          </Link>
        </li>
        <li>
          <Link href="/wspolpraca/sprawy">Sprawy</Link>
        </li>
        <li>
          <Link href="/wspolpraca/regulacje-wewnetrzne">Regulacje wewnętrzne</Link>
        </li>
      </ul>
    </div>
  );
}
