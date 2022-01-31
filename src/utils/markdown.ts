import remarkEmbedder from "@remark-embedder/core"
import {remarkPlugin as remarkVscode} from "gatsby-remark-vscode"
import matter from "gray-matter"
import path from "path"
import rehypeExternalLinks from "rehype-external-links"
import rehypeImageSize from "rehype-img-size"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import remarkUnwrapImages from "remark-unwrap-images"
import {
    codesandboxTransformer,
    twitchTransformer,
    twitterTransformer,
    youtubeTransformer,
} from "transformers"
import {Markdown} from "types/markdown"
import {unified} from "unified"

const getMarkdownBySlug = async (slug: string): Promise<Markdown> => {
    const nowPath = path.join(process.cwd(), `content/pages/${slug}.md`)

    const file = matter.read(nowPath)
    const html = await transformMarkdown(file.content)

    const markdown: Markdown = {
        html,
        frontmatter: file.data,
    }

    return markdown
}

const transformMarkdown = async (markdown: string): Promise<string> => {
    const processor = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkUnwrapImages)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .use(remarkEmbedder, {
            transformers: [
                codesandboxTransformer,
                twitchTransformer,
                twitterTransformer,
                youtubeTransformer,
            ],
        })
        .use(remarkVscode, {
            theme: "Shades of Purple",
            extensions: ["shades-of-purple"],
            inlineCode: {
                marker: "|",
                theme: {
                    default: "Shades of Purple",
                },
            },
        })
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeImageSize, {dir: "public"})
        .use(rehypeExternalLinks, {
            target: "_blank",
            rel: ["noopener", "noreferrer"],
        })
        .use(rehypeRaw)
        .use(rehypeStringify)

    const file = await processor.process(markdown)
    const html = file.toString()

    return html
}

export {getMarkdownBySlug, transformMarkdown}
