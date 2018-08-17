import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

// components
import PostList from "../components/PostList"


const blogPage = ({data}) => {

    const posts = data.allContentfulPost.edges.map(
        edge => edge.node
    )

    return (

        <div>

            <Helmet>
                <title>blog</title>
            </Helmet>

            <PostList posts={posts}/>

        </div>

    )

}


export const blogPageQuery = graphql`
    query blogPageQuery {
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


blogPage.propTypes = {
    data: PropTypes.object.isRequired,
}


// export
export default blogPage
