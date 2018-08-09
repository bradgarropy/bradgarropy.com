import React from "react"
import PropTypes from "prop-types"

// components
import PostList from "../components/PostList"

// styles
import "./index.css"


const Blog = ({data}) => {

    return (

        <div className="blog">

            <PostList posts={data.allContentfulPost.edges}/>

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
                    date(formatString: "MMMM D, YYYY")
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
    }
`


Blog.propTypes = {
    data: PropTypes.object.isRequired,
}


// export
export default Blog
