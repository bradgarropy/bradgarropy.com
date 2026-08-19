type Markdown<T = unknown> = {
    markdown: string
    attributes: T
}

type RenderedMarkdown<T> = {
    html: string
    frontmatter: T
}

export type {Markdown, RenderedMarkdown}
