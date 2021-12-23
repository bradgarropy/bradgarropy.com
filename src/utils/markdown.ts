import remarkShiki from "@stefanprobst/remark-shiki"
import matter from "gray-matter"
import path from "path"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import * as shiki from "shiki"
import {Markdown} from "types/markdown"
import {unified} from "unified"

const shadesOfPurple =
    "../../node_modules/shades-of-purple/themes/shades-of-purple-color-theme.json"

const getMarkdownBySlug = async (slug: string): Promise<Markdown> => {
    const nowPath = path.join(process.cwd(), `content/pages/${slug}/index.md`)

    const file = matter.read(nowPath)
    const html = await transformMarkdown(file.content)

    const markdown: Markdown = {
        html,
        frontmatter: file.data,
    }

    return markdown
}

const transformMarkdown = async (markdown: string): Promise<string> => {
    const theme = await shiki.loadTheme(shadesOfPurple)
    const highlighter = await shiki.getHighlighter({theme})

    const html = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkShiki, {highlighter})
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypeRaw)
        .use(rehypeStringify)
        .processSync(markdown)
        .toString()

    return html
}

export {getMarkdownBySlug, transformMarkdown}
