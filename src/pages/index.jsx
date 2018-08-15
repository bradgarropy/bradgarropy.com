import React from "react"
import PropTypes from "prop-types"

// components
import PostList from "../components/PostList"


const Home = ({data}) => {

    const posts = data.allContentfulPost.edges.map(
        edge => edge.node
    )

    return (

        <PostList posts={posts}/>

    )

}


export const homeQuery = graphql`
    query homeQuery {
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


Home.propTypes = {
    data: PropTypes.object.isRequired,
}


// export
export default Home
