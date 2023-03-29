type Now = {
    html: string
    frontmatter: NowFrontmatter
}

type NowFrontmatter = {
    date: string
}

type AdjacentNow = Now | null

type NewerNow = AdjacentNow
type OlderNow = AdjacentNow

export type {NewerNow, Now, NowFrontmatter, OlderNow}
