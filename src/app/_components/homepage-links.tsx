import React from "react";
import styles from "./components.module.css";
import { HomepageLink } from "./homepage-link";

export function HomepageLinks() {
  return (
    <div>
      <div className={styles.links__container}>
        <ul className={styles.links}>
          <HomepageLink content="konsultacje" col="left" />
          <HomepageLink content="szkolenia" col="right" />
          <HomepageLink content="opinie-i-ekspertyzy" col="left" />
          <HomepageLink content="stala-wspolpraca" col="right" />
          <HomepageLink content="pisma" col="left" />
          <HomepageLink content="regulaminy" col="right" />
        </ul>
      </div>
    </div>
  );
}
