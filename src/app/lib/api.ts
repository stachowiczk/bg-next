import fs from "fs";
import { Post } from "../interfaces/post";
import { join } from "path";
import matter from "gray-matter";

const contentsDirectory = join(process.cwd(), "src/app/wspolpraca/_contents");

export function getContentBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(contentsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content } as Post;
}

export function getAllContents() {
  const slugs = fs.readdirSync(contentsDirectory);
  const contents = slugs.map((slug) => getContentBySlug(slug));
  return contents;
}