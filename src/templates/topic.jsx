import React from "react"
import PropTypes from "prop-types"

// components
import PostList from "../components/PostList"

// styles
import "./topic.css"


const Topic = ({data}) => {

    const topic = data.contentfulTopic.name
    let posts = data.contentfulTopic.post

    posts.sort(function(a, b) {

        const first = new Date(a.date)
        const second = new Date(b.date)

        const result = second - first

        return result
    })

    return (

        <div className="topic">

            <h1>
                {`Topic: ${topic}`}
            </h1>

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
