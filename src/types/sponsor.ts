type Sponsors = {
    "one-time": Sponsor[]
    "monthly": Sponsor[]
}

type Sponsor = {
    username: string
    avatar: string
    profile: string
    tier: string
}

export type {Sponsor, Sponsors}
