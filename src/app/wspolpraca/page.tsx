'use client'
import styles from "../page.module.css";
import { useRouter } from "next/navigation";
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
