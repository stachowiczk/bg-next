import Link from "next/link";
import styles from "./components.module.css";
type Props = {
    text: string;
    rel: string;
    };

export const Button = ({text, rel}: Props ) => {
  return (
  <div className={styles.button__container}>
    <button className={styles.button}>
        <Link href={rel}>
        <span className={styles.button__span}>{text}</span>
        </Link>
    </button>
  </div> 
    );
};
