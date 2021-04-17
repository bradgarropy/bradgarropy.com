import Link from "@bradgarropy/gatsby-link"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Layout from "components/Layout"
import Section from "components/Section"
import {useSponsors} from "hooks"
import styled from "styled-components"
import {link} from "styles/partials"

const Thanks = styled(Section)`
    margin-bottom: 4rem;

    ${link}
`

const Tiers = styled.div`
    display: grid;
    row-gap: 5rem;
`

const Empty = styled.p`
    ${link}
`
const Sponsor = styled(Link)`
    display: inline-block;
`

const Avatar = styled.img`
    width: 6rem;
    margin: 0rem;
    border-radius: 50%;
    border: 5px solid var(--black);
    background-color: var(--black);
    transition: all 300ms;

    :hover {
        transform: rotate(-2deg);
        border: 5px solid var(--primary);
        background-color: var(--primary);
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
                <p>
                    If you want to support me and be featured on this page go{" "}
                    <Link to="https://bradgarropy.com/sponsor">sponsor</Link>{" "}
                    me!
                </p>
            </Thanks>

            <Tiers>
                {Object.entries(tiers).map(([tier, sponsors]) => (
                    <Section key={tier} title={tier}>
                        {sponsors.length ? (
                            sponsors.map(sponsor => (
                                <Sponsor
                                    key={sponsor.username}
                                    to={sponsor.profile}
                                >
                                    <Avatar
                                        src={sponsor.avatar}
                                        alt={sponsor.username}
                                    />
                                </Sponsor>
                            ))
                        ) : (
                            <Empty>
                                Nobody yet,{" "}
                                <Link to="https://bradgarropy.com/sponsor">
                                    be the first
                                </Link>
                                !
                            </Empty>
                        )}
                    </Section>
                ))}
            </Tiers>
        </Layout>
    )
}

export default SponsorsPage
