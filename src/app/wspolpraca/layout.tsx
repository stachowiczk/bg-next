import React from "react";
import { CollabText } from "../_components/CollabText";
import { CollabSidebar } from "../_components/CollabSidebar";
import "./layout.css";
export default function CollabLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="collab-section">
      {children}
        <CollabSidebar />
    </section>
  );
}
