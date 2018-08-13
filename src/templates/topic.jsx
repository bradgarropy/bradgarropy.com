import React from "react"
import PropTypes from "prop-types"

// components
import PostList from "../components/PostList"
import TopicMeta from "../components/TopicMeta"

// styles
import "./topic.css"


const Topic = ({data}) => {

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

        <div className="topic">

            <TopicMeta
                topic={topic}
                icon={icon}
            />

            <PostList posts={posts}/>

        </div>

    )

}


Topic.propTypes = {
    data: PropTypes.object.isRequired,
}


export const topicQuery = graphql`
    query topicQuery($topic: String!) {
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
                date
                title
                topic {
                    name
                }
            }
        }
    }
`


// export
export default Topic
