import {remarkPlugin as remarkVscode} from "gatsby-remark-vscode"
import matter from "gray-matter"
import path from "path"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
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
        .use(remarkVscode, {
            theme: "Shades of Purple",
            extensions: ["shades-of-purple"],
        })
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypeRaw)
        .use(rehypeStringify)

    const file = await processor.process(markdown)
    const html = file.toString()

    return html
}

export {getMarkdownBySlug, transformMarkdown}
