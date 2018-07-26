import React from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"

// styles
import "./posts.css"


const Posts = (props) => {

    return (

        <div className="posts">

            <h1>Posts</h1>

            {props.data.allContentfulPost.edges.map(
                post => (
                    <Link
                        to={`/post/${post.node.slug}`}
                        key={post.node.id}
                    >
                        {post.node.title}
                    </Link>
                )
            )}

        </div>

    )

}


Posts.propTypes = {

}


Posts.defaultProps = {

}


export const postsQuery = graphql`
    query postsQuery {
        allContentfulPost (
            sort: {
                fields: [createdAt], order: DESC
            }
        ) {
            edges {
                node {
                    id
                    title
                    slug
                    date
                    body {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
    }`


// export
export default Posts
