import React from "react";
import { Button } from "./button";
import styles from "../page.module.css";
import { Noto_Serif, Work_Sans } from "next/font/google";
type Props = {
  heading: string;
  contentLeft: string;
  contentRight: string;
  buttonText: string;
  buttonRel: string;
};
const work_sans = Work_Sans({weight: "500", subsets: ["latin"]})
const noto_serif = Noto_Serif({weight: "400", style: "italic", subsets: ["latin"]})
export default function SectionWithHeading({
  heading,
  contentLeft,
  contentRight,
  buttonText,
  buttonRel,
}: Props) {
  let font;
  let font_size;
  if (heading === "Specjalizacja") {
    font = null;
    font_size = "";

  } else {
    font = noto_serif.className;
    font_size = "2.2rem";
  }
  return (
    <section className={styles.section}>
      <div className={styles.container__title}>
        <div dangerouslySetInnerHTML={{__html: heading}}className={font} style={{ fontSize: font_size}}></div>
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
