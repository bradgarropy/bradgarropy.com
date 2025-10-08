import {rehypeCloudinaryImageSize} from "@bradgarropy/rehype-cloudinary-image-size"
import {rehypeImageLinks} from "@bradgarropy/rehype-image-links"
import remarkEmbedder from "@remark-embedder/core"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import theme from "node_modules/shades-of-purple/themes/shades-of-purple-color-theme.json5"
import rehypeExternalLinks from "rehype-external-links"
import type {Options} from "rehype-pretty-code"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import rehypeUnwrapImages from "rehype-unwrap-images"
import remarkGfm from "remark-gfm"
import remarkInlineLinks from "remark-inline-links"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import {createHighlighter} from "shiki"
import {unified} from "unified"

import {codesandboxTransformer} from "~/transformers/codesandbox"
import {twitchTransformer} from "~/transformers/twitch"
import {twitterTransformer} from "~/transformers/twitter"
import {youtubeTransformer} from "~/transformers/youtube"
import type {Markdown, TransformedMarkdown} from "~/types/markdown"

const getMarkdownBySlug = async (
    slug: string,
): Promise<TransformedMarkdown> => {
    const files = import.meta.glob<Markdown>("/content/pages/*.md", {
        eager: true,
    })

    const file = files[`/content/pages/${slug}.md`]
    const html = await transformMarkdown(file.markdown)

    const markdown: TransformedMarkdown = {
        html,
        frontmatter: file.attributes,
    }

    return markdown
}

const transformMarkdown = async (markdown: string): Promise<string> => {
    const options: Options = {
        theme,
        keepBackground: true,
        getHighlighter: options =>
            createHighlighter({
                ...options,
                themes: [theme],
            }),
    }

    const processor = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkInlineLinks)
        .use(
            /* v8 ignore next 3 */
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            process.env.VITEST ? remarkEmbedder : remarkEmbedder.default,
            {
                transformers: [
                    codesandboxTransformer,
                    twitchTransformer,
                    twitterTransformer,
                    youtubeTransformer,
                ],
            },
        )
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypePrettyCode, options)
        .use(rehypeExternalLinks, {
            target: "_blank",
            rel: ["noopener", "noreferrer"],
        })
        .use(rehypeUnwrapImages)
        .use(rehypeCloudinaryImageSize)
        .use(rehypeImageLinks, {
            srcTransform: (url: string) => {
                const base =
                    "https://res.cloudinary.com/bradgarropy/image/upload"

                if (!url.startsWith(base)) {
                    return url
                }

                const path = url.split(base)[1]
                const newUrl = `${base}/f_auto,q_auto,w_660,c_limit${path}`
                return newUrl
            },
        })
        .use(rehypeRaw)
        .use(rehypeStringify)

    const file = await processor.process(markdown)
    const html = file.toString()

    return html
}

export {getMarkdownBySlug, transformMarkdown}
