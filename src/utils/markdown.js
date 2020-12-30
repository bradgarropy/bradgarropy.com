import matter from "gray-matter"
import remark from "remark"
import remarkGFM from "remark-gfm"
import remarkHTML from "remark-html"
import remarkImages from "remark-images"

const parseMarkdown = async file => {
    const {data, content} = matter(file)

    const html = await remark()
        .use(remarkGFM)
        .use(remarkImages)
        .use(remarkHTML)
        .process(content)

    const markdown = {
        frontmatter: data,
        html: html.toString(),
    }

    return markdown
}

export {parseMarkdown}
