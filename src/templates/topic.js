import SEO from "@bradgarropy/gatsby-plugin-seo"
import PostList from "components/PostList"
import TopicMeta from "components/TopicMeta"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

const TopicTemplate = ({pageContext, data}) => {
    const {topic} = pageContext
    const {name, icon} = topic
    const posts = data.allMarkdownRemark.edges.map(edge => edge.node)

    return (
        <>
            <SEO title={`${icon} ${name}`} />

            <TopicMeta topic={topic} />
            <PostList posts={posts} />
        </>
    )
}

TopicTemplate.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
}

export const topicTemplateQuery = graphql`
    query ($name: String!) {
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
