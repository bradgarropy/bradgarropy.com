import FeaturedProjects from "components/FeaturedProjects"
import Hero from "components/Hero"
import LatestPosts from "components/LatestPosts"
import LatestVideos from "components/LatestVideos"
import Podcast from "components/Podcast"
import Section from "components/Section"
import styled from "styled-components"

const Sections = styled.div`
    display: grid;
    row-gap: 4rem;
    margin: 4rem 0rem;

    @media (max-width: 700px) {
        margin: 0rem;
    }
`

const IndexPage = () => {
    return (
        <Sections>
            <Hero />

            <Section title="blog" link="/blog">
                <LatestPosts />
            </Section>

            <Section title="videos" link="https://youtube.com/bradgarropy">
                <LatestVideos />
            </Section>

            <Section title="projects" link="https://github.com/bradgarropy">
                <FeaturedProjects />
            </Section>

            <Section title="podcast" link="https://webdevweekly.captivate.fm">
                <Podcast />
            </Section>
        </Sections>
    )
}

export default IndexPage
