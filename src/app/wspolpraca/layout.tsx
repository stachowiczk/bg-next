import React from "react";
import { CollabText } from "../_components/CollabText";
import { CollabSidebar } from "../_components/CollabSidebar";
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
