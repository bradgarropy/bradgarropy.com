import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import TopicMeta from "../components/TopicMeta"

const TopicTemplate = ({location, pageContext, data}) => {
    const {topic} = pageContext
    const {name, icon} = topic
    const posts = data.allMarkdownRemark.edges.map(edge => edge.node)

    return (
        <Layout>
            <Helmet>
                <title>{name}</title>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:title" content="bradgarropy"/>
                <meta name="twitter:description" content={`${name} ${icon}`}/>
                <meta
                    name="twitter:image"
                    content="https://bradgarropy.com/twitter.webp"
                />

                <meta property="og:url" content={location.href}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="bradgarropy"/>
                <meta property="og:description" content={`${name} ${icon}`}/>
                <meta
                    property="og:image"
                    content="https://bradgarropy.com/facebook.webp"
                />
            </Helmet>

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
