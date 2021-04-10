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
                                    url
                                    avatarUrl
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

    const sponsors = sponsorships.map(sponsorship => ({
        avatar: sponsorship.sponsorEntity.avatarUrl,
        profile: sponsorship.sponsorEntity.url,
    }))

    // {
    //     {"1 per month": [{},{}]}
    //     {"2 per month": [{},{}]}
    //     {"3 per month": [{},{}]}
    //     {"5 per month": [{},{}]}
    // }

    return sponsors
}

export default useSponsors
