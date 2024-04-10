import { getAllContents, getContentBySlug } from "@/app/lib/api";
import markdownToHtml from "@/app/lib/mdToHtml";
import { CollabText } from "@/app/_components/wsp-text";
import { notFound } from "next/navigation";
import { Metadata } from "next";
type Params = {
    params: {
        slug: string;
    };
    };
export default async function Collab({ params }: Params) {
    const content = getContentBySlug(params.slug);
    if (!content) {
        return notFound();
    }

    const htmlContent = await markdownToHtml(content.content || "");

    return <CollabText content={htmlContent} />;
}

export function generateMetadata({params}: Params): Metadata {
    const content = getContentBySlug(params.slug);
    return {
        title: `${content.title} | BG`,
    };
}

export function getStaticPaths() {
    const contents = getAllContents();
    return {
        paths: contents.map((content) => ({
            params: {
                slug: content.slug,
            },
        })),
        fallback: false,
    };
}
