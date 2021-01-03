import remarkEmbedder from "@remark-embedder/core"
import matter from "gray-matter"
import remark from "remark"
import remarkAutolinkHeadings from "remark-autolink-headings"
import remarkExternalLinks from "remark-external-links"
import remarkGFM from "remark-gfm"
import remarkHTML from "remark-html"
import remarkPrism from "remark-prism"
import remarkSlug from "remark-slug"
import twitch from "transformers/twitch"
import youtube from "transformers/youtube"

const parseFrontmatter = file => {
    const {data} = matter(file)
    return data
}

const parseMarkdown = async file => {
    const {data, content} = matter(file)

    const html = await remark()
        .use(remarkGFM)
        .use(remarkSlug)
        .use(remarkAutolinkHeadings)
        .use(remarkExternalLinks)
        .use(remarkEmbedder, {
            transformers: [twitch, youtube],
        })
        .use(remarkPrism, {transformInlineCode: true})
        .use(remarkHTML)
        .process(content)

    const markdown = {
        frontmatter: data,
        html: html.toString(),
    }

    return markdown
}

export {parseFrontmatter, parseMarkdown}
