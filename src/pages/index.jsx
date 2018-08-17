import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

// components
import PostList from "../components/PostList"


const Home = ({data}) => {

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
