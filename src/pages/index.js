import SEO from "@bradgarropy/gatsby-plugin-seo"
import FeaturedProjects from "components/FeaturedProjects"
import Hero from "components/Hero"
import LatestPosts from "components/LatestPosts"
import LatestVideos from "components/LatestVideos"
import Layout from "components/Layout"
import Podcast from "components/Podcast"
import Section from "components/Section"
import {useMeta} from "hooks"
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
    const meta = useMeta()

    return (
        <Layout>
            <SEO title={meta.description} description="" />

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

                <Section title="podcast" link="https://anchor.fm/webdevweekly">
                    <Podcast />
                </Section>
            </Sections>
        </Layout>
    )
}

export default IndexPage
