import React from "react"
import PropTypes from "prop-types"

// styles
import "./PostMeta.css"


const PostMeta = ({date, topic}) => {

    return (

        <div className="post-meta">

            <p>
                {date} in #{topic}
            </p>

        </div>

    )

}


PostMeta.propTypes = {
    date: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
}


// export
export default PostMeta
