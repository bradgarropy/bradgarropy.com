type Page = {
    path: string
    slug: string
    markdown: string
}

type RenderedPage = {
    html: string
}

export type {Page, RenderedPage}
