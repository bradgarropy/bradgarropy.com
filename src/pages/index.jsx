import React from "react"
import PropTypes from "prop-types"


// components
import Blog from "../components/Blog"


const Home = ({data}) => {

    return (

        <Blog posts={data.allContentfulPost.edges}/>

    )

}


export const homeQuery = graphql`
    query homeQuery {
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
                    date(formatString: "MMMM D, YYYY")
                    body {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
    }`


Home.propTypes = {
    data: PropTypes.object.isRequired,
}


// export
export default Home
