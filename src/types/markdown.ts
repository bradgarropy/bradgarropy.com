// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TransformedMarkdown<T = Record<string, any>> = {
    html: string
    frontmatter: T
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Markdown<T = Record<string, any>> = {
    markdown: string
    attributes: T
}

export type {Markdown, TransformedMarkdown}
