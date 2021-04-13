import {graphql, useStaticQuery} from "gatsby"

const useSponsors = () => {
    const query = graphql`
        {
            githubData {
                data {
                    user {
                        sponsorshipsAsMaintainer {
                            nodes {
                                sponsorEntity {
                                    login
                                    url
                                    avatarUrl
                                }
                                tier {
                                    name
                                    description
                                }
                            }
                        }
                    }
                }
            }
        }
    `

    const data = useStaticQuery(query)

    const sponsorships =
        data.githubData.data.user.sponsorshipsAsMaintainer.nodes

    const tiers = {
        "🥉 bronze": [],
        "🥈 silver": [],
        "🥇 gold": [],
        "💎 diamond": [],
    }

    sponsorships.forEach(sponsorship => {
        const {tier} = sponsorship

        const re = new RegExp("### (.*)$", "m")
        tier.name = re.exec(tier.description)[1].toLowerCase()

        const sponsor = {
            username: sponsorship.sponsorEntity.login,
            avatar: sponsorship.sponsorEntity.avatarUrl,
            profile: sponsorship.sponsorEntity.url,
        }

        tiers[tier.name].push(sponsor)
    })

    return tiers
}

export default useSponsors
