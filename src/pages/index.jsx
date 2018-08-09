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


Home.propTypes = {
    data: PropTypes.object.isRequired,
}


// export
export default Home
