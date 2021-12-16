import SEO from "@bradgarropy/next-seo"
import PostList from "components/PostList"
import TopicMeta from "components/TopicMeta"
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

export default TopicTemplate
