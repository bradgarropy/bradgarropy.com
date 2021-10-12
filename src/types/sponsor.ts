type Sponsors = {
    "one-time": Sponsor[]
    "monthly": Sponsor[]
}

type Sponsor = {
    username: string
    avatar: string
    profile: string
    tier: "monthly" | "one-time"
}

export type {Sponsor, Sponsors}
