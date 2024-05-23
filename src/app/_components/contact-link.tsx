import Image from "next/image";
import styles from "./components.module.css";

type Props = {
  text: string;
  icon: string;
};

export default function ContactLink({ text, icon }: Props) {
  let linkRef;
  let cursorStyle = "default";
  if (text.includes("@")) {
    linkRef = `mailto:${text}`;
    cursorStyle = "pointer";
  } else if (text.includes("604")) {
    linkRef = `tel:${text}`;
  }
  return (
    <a href={linkRef} style={{cursor: cursorStyle }}>
    <div className={styles.contact__link__container}>
      <div className={styles.contact__link__icon} aria-label="Contact icon">
        <Image src={icon} alt="Contact Icon" width={50} height={50} />
      </div>
      <div className={styles.contact__link__text} dangerouslySetInnerHTML={{__html: text}}></div>
    </div>
    </a>
  );
}
