import remarkShiki from "@stefanprobst/remark-shiki"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import * as shiki from "shiki"
import {unified} from "unified"

const transformMarkdown = async (markdown: string): Promise<string> => {
    const highlighter = await shiki.getHighlighter({
        theme: "material-palenight",
    })

    const html = unified()
        .use(remarkParse)
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

export {transformMarkdown}
