import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { HomepageLinks } from "./_components/homepage-links";
import { Button } from "./_components/button";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.homepage__hero}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant
            morbi tristique senectus et netus et malesuada fames. Tempor orci
            dapibus ultrices in iaculis nunc sed. Integer vitae justo eget magna
            fermentum iaculis eu non diam. Posuere sollicitudin aliquam ultrices
            sagittis. Blandit volutpat maecenas volutpat blandit aliquam etiam
            erat velit. Pellentesque habitant morbi tristique senectus et netus.
            In cursus turpis massa tincidunt dui ut ornare lectus. Ullamcorper
            sit amet risus nullam eget. Sed odio morbi quis commodo odio aenean
            sed adipiscing.{" "}
          </div>
          <div className={styles.homepage__image}>image</div>
        </div>
      </section>
      <section className={styles.section} style={{padding: "5rem"}}>
        <HomepageLinks />
        <Button text="Więcej"/> 
      </section>
      <section className={styles.section}>
        </section>

    </main>
  );
}
