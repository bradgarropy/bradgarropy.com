import React from "react"
import PropTypes from "prop-types"

// components
import PostListItem from "./PostListItem"

// styles
import "../scss/PostList.scss"


const PostList = ({posts}) => {

    return (

        <div className="post-list">

            {posts.map(
                post => (
                    <PostListItem
                        key={post.id}
                        post={post}
                    />
                )
            )}

        </div>

    )

}


PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}


// export
export default PostList
