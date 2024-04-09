import fs from "fs";
import { Post } from "../interfaces/post";
import { join } from "path";
import matter from "gray-matter";

const contentsDirectory = join(process.cwd(), "src/app/wspolpraca/_contents");
const blogDirectory = join(process.cwd(), "src/app/blog/_posts");

export function getContentBySlug(slug: string, isBlog = false) {
  const realSlug = slug.replace(/\.md$/, "");
  if (isBlog) {
    const fullPath = join(blogDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { ...data, slug: realSlug, content } as Post;
  } else {
    const fullPath = join(contentsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { ...data, slug: realSlug, content } as Post;
  }
}

export function getAllContents(isBlog = false) {
  if (isBlog) {
    const slugs = fs.readdirSync(blogDirectory);
    const contents = slugs.map((slug) => getContentBySlug(slug, true));
    return contents;
  } else {
    const slugs = fs.readdirSync(contentsDirectory);
    const contents = slugs.map((slug) => getContentBySlug(slug));
    return contents;
  }
}
