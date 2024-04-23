import React from "react";
import { Button } from "./button";
import styles from "../page.module.css";
type Props = {
  heading: string;
  contentLeft: string;
  contentRight: string;
  buttonText: string;
  buttonRel: string;
};
export default function SectionWithHeading({
  heading,
  contentLeft,
  contentRight,
  buttonText,
  buttonRel,
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container__title}>
        <div className={styles.homepage__hero__title}>{heading}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.homepage__hero}>{contentLeft}</div>{" "}
        <div className={styles.homepage__hero}>{contentRight}</div>
      </div>
      <Button text={buttonText} rel={buttonRel} />
      <div style={{ height: "5rem" }}> </div>
    </section>
  );
}
