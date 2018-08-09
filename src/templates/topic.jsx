import React from "react"
import PropTypes from "prop-types"

// styles
import "./topic.css"


const Topic = ({data}) => {

    return (

        <div className="topic">

            <h1>
                {`Topic: ${data.contentfulTopic.name}`}
            </h1>

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
        }
    }
`


// export
export default Topic
