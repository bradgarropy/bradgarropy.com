import SEO from "@bradgarropy/gatsby-plugin-seo"
import Layout from "components/Layout"
import Section from "components/Section"
import {useSponsors} from "hooks"
import styled from "styled-components"

const Thanks = styled(Section)`
    margin-bottom: 4rem;
`

const Tiers = styled.div`
    display: grid;
    row-gap: 5rem;
`

const Sponsor = styled.a`
    display: inline-block;
`

const Avatar = styled.img`
    width: 6rem;
    margin: 0rem;
    border-radius: 50%;
    border: 5px solid ${({theme}) => theme.colors.black};
    background-color: ${({theme}) => theme.colors.black};
    transition: all 300ms;

    :hover {
        transform: rotate(-2deg);
        border: 5px solid ${({theme}) => theme.colors.primary};
        background-color: ${({theme}) => theme.colors.primary};
    }
`

const SponsorsPage = () => {
    const tiers = useSponsors()

    return (
        <Layout>
            <SEO title="💜 sponsors" description="" />

            <Thanks title="💜 thank you">
                <p>
                    Each and every supporter I have incentivizes me to continue
                    creating libraries, videos, blogs, and streams. All earnings
                    will go directly towards improving the quality of my work,
                    and encouraging more frequent updates.
                </p>
            </Thanks>

            <Tiers>
                {Object.entries(tiers).map(([tier, sponsors]) => (
                    <Section key={tier} title={tier}>
                        {sponsors.length ? (
                            sponsors.map(sponsor => (
                                <Sponsor
                                    key={sponsor.username}
                                    href={sponsor.profile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Avatar
                                        src={sponsor.avatar}
                                        alt={sponsor.username}
                                    />
                                </Sponsor>
                            ))
                        ) : (
                            <p>
                                Nobody yet,{" "}
                                <a
                                    href="https://bradgarropy.com/sponsor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    be the first
                                </a>
                                !
                            </p>
                        )}
                    </Section>
                ))}
            </Tiers>
        </Layout>
    )
}

export default SponsorsPage
