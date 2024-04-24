import type { Post } from "../interfaces/post";
import styles from "./components.module.css";
type Props = {
  title: string;
  content: string;
  date: string;
  author: string;
};

export default function Post({ title, content, date, author }: Props) {
  return (
    <div className={styles.blog__post}>
      <div className={styles.blog__header}>
        <h1>{title}</h1>
      </div>

      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div className={styles.blog__footer} style={{marginTop: "4rem"}}>
        <p>{date}</p>
        <p>{author}</p>
      </div>
    </div>
  );
}
