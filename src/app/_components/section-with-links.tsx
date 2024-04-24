import ContactLink from "./contact-link";
import styles from "../page.module.css";

type Props = {
  title: string;
  links: { text: string; icon: string }[];
};

export default function SectionWithLinks({ title, links }: Props) {
  const textLeft = "Beata Gruza<br/>Adwokat";
  const textRight =
    "Kancelaria Adwokacka<br/>Adwokat Beata Gruza<br/>NIP 5060108407";
  return (
    <section className={styles.section} id="kontakt">
      <div className={styles.container__title}>{title}</div>
      <div className={styles.container}>
        <div className={styles.homepage__hero}>
            <ContactLink key={"left"} text={textLeft} icon="/logo_adw.jpg" />
        </div>
        <div className={styles.homepage__hero__links} style={{color: "#0b3a28"}}>
          {links.map((link, index) => (
            <ContactLink key={index} text={link.text} icon={link.icon} />
          ))}
        </div>
        <div
          className={styles.homepage__hero}
          dangerouslySetInnerHTML={{ __html: textRight }}
          style={{ fontSize: "1.2rem" }}
        ></div>
      </div>
    </section>
  );
}
