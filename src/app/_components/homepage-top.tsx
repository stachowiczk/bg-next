import React from "react";
import styles from "../page.module.css";

type Props = {
  content: string;
};

export default function HomepageTop({ content }: Props) {
  return (
    <div className={styles.container__top}>
      <div className={styles.container}>
        <div className={styles.homepage__hero}>
            {content}
        </div>

        <div className={styles.homepage__image}>image</div>
      </div>
    </div>
  );
}
