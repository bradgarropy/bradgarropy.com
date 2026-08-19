// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Markdown<T = Record<string, any>> = {
    markdown: string
    attributes: T
}

export type {Markdown}
