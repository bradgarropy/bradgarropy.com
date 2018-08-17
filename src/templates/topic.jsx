import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

// components
import PostList from "../components/PostList"
import TopicMeta from "../components/TopicMeta"


const TopicTemplate = ({data}) => {

    const topic = data.contentfulTopic.name
    const icon = data.contentfulTopic.icon
    let posts = data.contentfulTopic.post

    posts.sort(function(a, b) {

        const first = new Date(a.date)
        const second = new Date(b.date)

        const result = second - first

        return result
    })

    return (

        <div>

            <Helmet>
                <title>{topic}</title>
            </Helmet>

            <TopicMeta
                topic={topic}
                icon={icon}
            />

            <PostList posts={posts}/>

        </div>

    )

}


TopicTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}


export const topicTemplateQuery = graphql`
    query topicTemplateQuery($topic: String!) {
        contentfulTopic(
            name: {
                eq: $topic
            }
        ) {
            name
            icon
            post {
                id
                slug
                title
                date(formatString: "MMMM D, YYYY")
                topic {
                    name
                }
            }
        }
    }
`


// export
export default TopicTemplate
