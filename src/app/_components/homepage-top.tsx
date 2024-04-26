import styles from "../page.module.css";
import Image from "next/image";

type Props = {
  content: string;
  page: string;
};

export default function HomepageTop({ content, page }: Props) {
  let image = "/image2.webp";
  if (page === "about") {
    image = "/image.webp";
  }
  return (
    <div className={styles.container__top}>
      <div className={styles.container}>
        <div dangerouslySetInnerHTML={{__html: content}}className={styles.homepage__hero}></div>

        <div className={styles.homepage__image}>
          <Image
            src={image}
            alt="homepage-top"
            width={320}
            height={400}
            style={{ borderRadius: "10px", height: "auto", maxWidth: "100%"}}
          />
        </div>
      </div>
    </div>
  );
}
