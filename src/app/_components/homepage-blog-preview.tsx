import { getAllContents } from "../lib/api";
import PostPreview from "./post-preview";
import styles from "../page.module.css";
import componentStyles from "./components.module.css";
import { Button } from "./button";

export default function HomepageBlogPreview() {
  const content = getAllContents(true);
  const lastThreePosts = content.slice(0, 3);

  function getPreviews() {
    return lastThreePosts.map((content) => (
      <PostPreview key={content.slug} post={content} />
    ));
  }

  return (
    <section className={styles.section}>
        <div className={styles.container__title}>Blog</div>
      <div
        className={styles.container__blog__previews}
      >
        {getPreviews()}
      </div>
      <Button rel="/blog" text="Więcej" />
      <div style={{ height: "5vh"}}></div>
    </section>
  );
}
