import { CollabSidebar } from "../_components/wsp-sidebar";
import styles from "./layout.module.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Współpraca | Adwokat Beata Gruza",
  description: "Kancelaria Adwokacka Adwokat Beaty Gruzy oferuje współpracę w szerokim zakresie spraw",
};
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
