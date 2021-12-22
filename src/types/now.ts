type Now = {
    html: string
    frontmatter: NowFrontmatter
}

type NowFrontmatter = {
    date: string
}

export type {Now, NowFrontmatter}
