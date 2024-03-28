import React from "react";
import Link from "next/link";
import styles from "./components.module.css"
import { text } from "stream/consumers";

type Props = {
    content: string;
    col: string;
};


export function HomepageLink({ content, col }: Props) {
  const link = `/wspolpraca/${content}`;
  let textContent = content.replace(/-/g, " ");
  textContent = textContent.charAt(0).toUpperCase() + textContent.slice(1);
  if (content === "stala-wspolpraca") {
    textContent = "Stała współpraca";
  }
  return (
    <li className={`${styles.link} ${styles[`link-${col}`]}`}>
      <Link scroll={true} href={link}>{textContent}</Link>
    </li>
  );
}