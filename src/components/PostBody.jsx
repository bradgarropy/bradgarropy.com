import React from "react"
import PropTypes from "prop-types"

// styles
import "../scss/PostBody.scss"


const PostBody = ({content}) => {

    return (

        <div className="post-body">

            <div
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />

        </div>

    )

}


PostBody.propTypes = {
    content: PropTypes.string.isRequired,
}


// export
export default PostBody
