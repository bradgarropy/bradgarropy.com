import React from "react"
import PropTypes from "prop-types"

// styles
import "./TopicMeta.css"


const TopicMeta = ({topic, icon}) => {

    return (

        <div className="topic-meta">
            <h1>{icon} {topic}</h1>
        </div>

    )

}


TopicMeta.propTypes = {
    topic: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}


// export
export default TopicMeta
