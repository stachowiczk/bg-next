import type { Post } from "../interfaces/post";
import styles from "./components.module.css";

type Props = {
  post: Post;
};

export default function PostPreview({ post }: Props) {
  return (
    <a href={`/blog/${post.slug}`} className={styles.blog__preview}>
      <div className={styles.blog__preview}>
        <h2 className={styles.blog__link}>{post.title}</h2>
        <p>{post.excerpt}</p>
        <div className={styles.blog__footer}>
          <p>{post.date}</p>
          <p>{post.author}</p>
        </div>
      </div>
    </a>
  );
}
