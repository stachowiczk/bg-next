import React from "react";
import styles from "./components.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__left}>
          <div className={styles.footer__container__left__logo}>
          </div>
          <div className={styles.footer__container__left__text}>
            <p>© 2024 All rights reserved</p>
          </div>
        </div>
        <div className={styles.footer__container__right}>
          <div className={styles.footer__container__right__text}>
            <p>
              Created by:{" "}
              <a href="https://www.linkedin.com/in/stachowiczk/">
                Karol Stachowicz
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
