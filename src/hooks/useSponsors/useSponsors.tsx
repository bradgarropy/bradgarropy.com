import {graphql, useStaticQuery} from "gatsby"
import {Sponsors} from "types/sponsor"

const useSponsors = (): Sponsors => {
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
                                    isOneTime
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

    const sponsors = {
        "monthly": [],
        "one-time": [],
    }

    sponsorships.forEach(sponsorship => {
        const re = new RegExp("### (.*)$", "m")
        const tier = re.exec(sponsorship.tier.description)[1].split(" ")[0]

        const sponsor = {
            username: sponsorship.sponsorEntity.login,
            avatar: sponsorship.sponsorEntity.avatarUrl,
            profile: sponsorship.sponsorEntity.url,
            tier,
        }

        if (sponsorship.tier.isOneTime) {
            sponsors["one-time"].push(sponsor)
        } else {
            sponsors["monthly"].push(sponsor)
        }
    })

    return sponsors
}

export default useSponsors
