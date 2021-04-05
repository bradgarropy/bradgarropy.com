import SEO from "@bradgarropy/gatsby-plugin-seo"
import Hero from "components/Hero"
import LatestPosts from "components/LatestPosts"
import Layout from "components/Layout"
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
            </Sections>
        </Layout>
    )
}

export default IndexPage
