import { getAllContents } from "../lib/api";
import { Metadata } from "next";
import PostPreview from "../_components/post-preview";
import reactStyles from "../_components/components.module.css";
export function generateMetadata(): Metadata {
  return {
    title: `Blog | BG`,
  };
}
export default async function Blog() {
  const content = getAllContents(true);

  function getPreviews() {
    return content.map((content) => (
      <PostPreview key={content.slug} post={content} />
    ));
  }
  return (
    <div className={reactStyles.container__blog}>
      <div className={reactStyles.more__stories__main}>{getPreviews()}</div>
    </div>
  );
}
