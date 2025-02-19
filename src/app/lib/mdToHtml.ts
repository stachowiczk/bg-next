import { remark } from "remark";
import remarkRehype from "remark-rehype";
import html from "remark-html";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
    const result = await remark()
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(markdown);
    return result.toString();
}
