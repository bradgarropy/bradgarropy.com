import {rehypeCloudinaryImageSize} from "@bradgarropy/rehype-cloudinary-image-size"
import {rehypeImageLinks} from "@bradgarropy/rehype-image-links"
import remarkEmbedder from "@remark-embedder/core"
import {defineDocumentType, makeSource} from "contentlayer/source-files"
import remarkVscode from "gatsby-remark-vscode"
import rehypeExternalLinks from "rehype-external-links"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import remarkInlineLinks from "remark-inline-links"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import remarkUnwrapImages from "remark-unwrap-images"

import {codesandboxTransformer} from "./src/transformers/codesandbox"
import {twitchTransformer} from "./src/transformers/twitch"
import {twitterTransformer} from "./src/transformers/twitter"
import {youtubeTransformer} from "./src/transformers/youtube"

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: "*.md",
    fields: {
        date: {
            type: "date",
            description: "post date",
            required: true,
        },
        slug: {
            type: "string",
            description: "post slug",
            required: true,
        },
        title: {
            type: "string",
            description: "post title",
            required: true,
        },
        topic: {
            type: "enum",
            options: ["coding", "tech", "life"],
            description: "post title",
            required: true,
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: post => `/blog/${post._raw.flattenedPath}`,
        },
    },
}))

export default makeSource({
    contentDirPath: "content/posts",
    disableImportAliasWarning: true,
    documentTypes: [Post],
    markdown: processor => {
        processor.use(remarkFrontmatter)
        processor.use(remarkParse)
        processor.use(remarkGfm)
        processor.use(remarkUnwrapImages)
        processor.use(remarkInlineLinks)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        processor.use(remarkEmbedder.default, {
            transformers: [
                codesandboxTransformer,
                twitchTransformer,
                twitterTransformer,
                youtubeTransformer,
            ],
        })
        processor.use(remarkVscode.remarkPlugin, {
            theme: "Shades of Purple",
            extensions: ["shades-of-purple"],
            inlineCode: {
                marker: "|",
                theme: {
                    default: "Shades of Purple",
                },
            },
        })
        processor.use(remarkRehype, {allowDangerousHtml: true})
        processor.use(rehypeExternalLinks, {
            target: "_blank",
            rel: ["noopener", "noreferrer"],
        })
        processor.use(rehypeCloudinaryImageSize)
        processor.use(rehypeImageLinks)
        processor.use(rehypeRaw)
        processor.use(rehypeStringify)
    },
})
