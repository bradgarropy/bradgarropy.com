import {graphql} from "gatsby"
import PropTypes from "prop-types"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import TopicMeta from "../components/TopicMeta"

const TopicTemplate = ({pageContext, data}) => {
    const {topic} = pageContext
    const {name, icon} = topic
    const posts = data.allMarkdownRemark.edges.map(edge => edge.node)

    return (
        <Layout>
            <SEO title={`${icon} ${name}`} description="" />

            <TopicMeta topic={topic} />
            <PostList posts={posts} />
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
