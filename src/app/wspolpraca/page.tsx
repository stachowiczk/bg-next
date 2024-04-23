'use client'
import Image from "next/image";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";
import { CollabText } from "../_components/wsp-text";
import { useEffect } from "react";

export default function Collab() {
  const router = useRouter();
  useEffect(() => {
    router.push("/wspolpraca/konsultacje");
  }, []);
  return (
    <main className={styles.main}>
    </main>
  );
}
