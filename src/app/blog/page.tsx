import { getAllContents } from "../lib/api";
import Post from "../_components/post";
import PostPreview from "../_components/post-preview";
import styles from "../page.module.css";
import reactStyles from "../_components/components.module.css";
export default async function Blog() {
  const content = getAllContents(true);

  function getPreviews() {
    return content.map((content) => (
      <PostPreview key={content.slug} post={content} />
    ));
  }
  return (
    <div className={reactStyles.container__blog}>
      <div className={reactStyles.more__stories}>{getPreviews()}</div>
    </div>
  );
}
