import type {NowFrontmatter} from "~/schemas/now"
import type {RenderedMarkdown} from "~/types/markdown"

type Now = {
    path: string
    markdown: string
    frontmatter: NowFrontmatter
}

type RenderedNow = RenderedMarkdown<NowFrontmatter>

type AdjacentNow = RenderedNow | null

type NewerNow = AdjacentNow
type OlderNow = AdjacentNow

export type {NewerNow, Now, NowFrontmatter, OlderNow, RenderedNow}
