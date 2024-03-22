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
        <li>Szkolenia</li>
        <li>Opinie i Ekspertyzy</li>
        <li>Stała Współpraca</li>
        <li>Pisma</li>
        <li>Regulaminy</li>
      </ul>
    </div>
  );
}
