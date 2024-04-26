import { notFound } from "next/navigation";
import styles from "../../_components/components.module.css";
import { Metadata } from "next";
import { getContentBySlug, getAllContents } from "../../lib/api";
import markdownToHtml from "../../lib/mdToHtml";
import Post from "../../_components/post";
import PostPreview from "@/app/_components/post-preview";
import SectionSeparator from "@/app/_components/section-separator";
type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const content = getContentBySlug(params.slug, true);
  return {
    title: `${content.title} | BG`,
  };
}

export async function generateStaticParams() {
  const contents = getAllContents(true);
  return contents.map((content) => ({
    params: {
      slug: content.slug,
    },
  }));
}
export default async function Blog({ params }: Params) {
  const content = getContentBySlug(params.slug, true); // isBlog = true
  const moreContent = getAllContents(true);
  moreContent.splice(
    moreContent.findIndex((c) => c.slug === content.slug),
    1
  );

  function getPreviews() {
    return moreContent.map((content) => (
      <PostPreview key={content.slug} post={content} />
    ));
  }

  if (!content) {
    return notFound();
  }

  const htmlContent = await markdownToHtml(content.content || "");
  return (
    <div className={styles.container__blog}>
      <Post
        title={content.title}
        content={htmlContent}
        date={content.date}
        author={content.author}
      />
      <SectionSeparator />
      <div className={styles.more__stories}>{getPreviews()}</div>
    </div>
  );
}
