import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import PostList from "../components/PostList"
import TopicMeta from "../components/TopicMeta"

const TopicTemplate = ({pageContext, data}) => {
    const meta = data.site.siteMetadata
    const {siteUrl} = meta
    const {topic} = pageContext
    const {name, icon} = topic
    const posts = data.allMarkdownRemark.edges.map(edge => edge.node)

    return (
        <Layout>
            <Meta title={name}/>
            <Facebook
                url={`${siteUrl}/topic/${name}`}
                description={`${icon} ${name}`}
            />
            <Twitter description={`${icon} ${name}`}/>

            <TopicMeta topic={topic}/>
            <PostList posts={posts}/>
        </Layout>
    )
}

TopicTemplate.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
}

export const topicTemplateQuery = graphql`
    query($name: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        allMarkdownRemark(
            filter: {frontmatter: {topic: {name: {eq: $name}}}}
            sort: {fields: frontmatter___date, order: DESC}
        ) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        topic {
                            name
                            icon
                        }
                        date(formatString: "MMMM D, YYYY")
                    }
                }
            }
        }
    }
`

export default TopicTemplate
