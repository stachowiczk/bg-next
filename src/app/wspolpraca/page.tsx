import Image from "next/image";
import styles from "../page.module.css";
import React from "react";
import { CollabText } from "../_components/CollabText";

export default function Collab() {
  return (
    <main className={styles.main}>
        <CollabText content={'content'}/>
    </main>
  );
}
