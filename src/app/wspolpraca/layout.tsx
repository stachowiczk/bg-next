import React from "react";
import { CollabSidebar } from "../_components/wsp-sidebar";
import styles from "./layout.module.css";
export default function CollabLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.collab__section}>
        <CollabSidebar />
      {children}
    </section>
  );
}
