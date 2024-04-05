import styles from "../page.module.css";
import Image from "next/image";

type Props = {
  content: string;
  page: string;
};

export default function HomepageTop({ content, page }: Props) {
  let image = "/image2.jpg";
  if (page === "about") {
    image = "/image.jpg";
  }
  return (
    <div className={styles.container__top}>
      <div className={styles.container}>
        <div className={styles.homepage__hero}>{content}</div>

        <div className={styles.homepage__image}>
          <Image
            src={image}
            alt="homepage-top"
            width={320}
            height={400}
            layout="intrinsic"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}
