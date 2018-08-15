import React from "react"
import PropTypes from "prop-types"

// styles
import "../scss/PostTitle.scss"


const PostTitle = ({title}) => {

    return (

        <div className="post-title">
            <h1>{title}</h1>
        </div>

    )

}


PostTitle.propTypes = {
    title: PropTypes.string.isRequired,
}


// export
export default PostTitle
