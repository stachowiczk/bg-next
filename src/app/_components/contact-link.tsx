import Image from "next/image";
import styles from "./components.module.css";

type Props = {
  text: string;
  icon: string;
};

export default function ContactLink({ text, icon }: Props) {
  return (
    <div className={styles.contact__link__container}>
      <div className={styles.contact__link__icon}>
        <Image src={icon} alt="contact-icon" width={50} height={50} />
      </div>
      <div className={styles.contact__link__text} dangerouslySetInnerHTML={{__html: text}}></div>
    </div>
  );
}
