import React from "react"
import PropTypes from "prop-types"
import "../scss/TopicMeta.scss"

const TopicMeta = ({topic, icon}) => {
    return (
        <div className="topic-meta">
            <h1>
                {icon} {topic}
            </h1>
        </div>
    )
}

TopicMeta.propTypes = {
    topic: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default TopicMeta
