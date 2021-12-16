import SEO from "@bradgarropy/next-seo"
import PostList from "components/PostList"
import TopicMeta from "components/TopicMeta"
import {graphql} from "gatsby"
import {FC} from "react"

const TopicTemplate: FC = ({pageContext, data}) => {
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
