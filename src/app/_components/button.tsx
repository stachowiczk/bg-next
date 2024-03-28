import React from "react";
import styles from "./components.module.css";
type Props = {
    text: string;
    };

export const Button = ({text}: Props ) => {
  return (
  <div className={styles.button__container}>
    <button className={styles.button}>
        <span className={styles.button__span}>{text}</span>
    </button>
  </div> 
    );
};
