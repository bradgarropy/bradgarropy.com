import React from "react"
import PropTypes from "prop-types"

// components
import PostList from "../components/PostList"

// styles
import "./topic.css"


const Topic = ({data}) => {

    const topic = data.contentfulTopic.name
    const posts = data.contentfulTopic.post

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
                topic {
                    name
                }
                title {
                    childMarkdownRemark {
                        excerpt
                    }
                }
            }
        }
    }
`


// export
export default Topic
