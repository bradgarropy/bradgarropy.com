import matter from "gray-matter"
import remark from "remark"
import remarkAutolinkHeadings from "remark-autolink-headings"
import remarkGFM from "remark-gfm"
import remarkHTML from "remark-html"
import remarkPrism from "remark-prism"
import remarkSlug from "remark-slug"

const parseMarkdown = async file => {
    const {data, content} = matter(file)

    const html = await remark()
        .use(remarkGFM)
        .use(remarkSlug)
        .use(remarkAutolinkHeadings)
        .use(remarkPrism, {transformInlineCode: true})
        .use(remarkHTML)
        .process(content)

    const markdown = {
        frontmatter: data,
        html: html.toString(),
    }

    return markdown
}

export {parseMarkdown}
