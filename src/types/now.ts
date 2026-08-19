import type {NowFrontmatter} from "~/schemas/now"

type Now = {
    path: string
    markdown: string
    frontmatter: NowFrontmatter
}

type RenderedNow = {
    html: string
    frontmatter: NowFrontmatter
}

type AdjacentNow = RenderedNow | null

type NewerNow = AdjacentNow
type OlderNow = AdjacentNow

export type {NewerNow, Now, NowFrontmatter, OlderNow, RenderedNow}
