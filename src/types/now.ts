import type {NowFrontmatter} from "~/schemas/now"

type Now = {
    html: string
    frontmatter: NowFrontmatter
}

type AdjacentNow = Now | null

type NewerNow = AdjacentNow
type OlderNow = AdjacentNow

export type {NewerNow, Now, NowFrontmatter, OlderNow}
