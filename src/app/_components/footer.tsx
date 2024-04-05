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
            <p style={{fontSize: "0.6rem"}}>Polityka prywatności | Regulamin</p>
          </div>
        </div>
        <div className={styles.footer__container__right}>
          <div className={styles.footer__container__right__text}>
            <p style={{fontSize: "0.5rem", textAlign: "center", color: "#494a49", marginTop: "2vh"}}>
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
