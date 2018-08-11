import React from "react"
import PropTypes from "prop-types"

// components
import PostList from "../components/PostList"

// styles
import "./index.css"


const Blog = ({data}) => {

    const posts = data.allContentfulPost.edges.map(
        edge => edge.node
    )

    return (

        <div className="blog">

            <PostList posts={posts}/>

        </div>

    )

}


export const blogQuery = graphql`
    query blogQuery {
        allContentfulPost (
            sort: {
                fields: [date],
                order: DESC
            }
        ) {
            edges {
                node {
                    id
                    slug
                    title
                    date(formatString: "MMMM D, YYYY")
                    topic {
                        name
                    }
                }
            }
        }
    }
`


Blog.propTypes = {
    data: PropTypes.object.isRequired,
}


// export
export default Blog
