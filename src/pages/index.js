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
    margin-top: 4rem;
`

const IndexPage = () => {
    const meta = useMeta()

    return (
        <Layout>
            <SEO title={meta.description} description="" />

            <Sections>
                <Hero />

                <Section title="blog">
                    <LatestPosts />
                </Section>

                <Section title="videos">
                    <LatestVideos />
                </Section>

                <Section title="projects">
                    <FeaturedProjects />
                </Section>

                <Section title="podcast">
                    <Podcast />
                </Section>
            </Sections>
        </Layout>
    )
}

export default IndexPage
