import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import {graphql} from "gatsby"

// components
import Layout from "../components/Layout"
import PostList from "../components/PostList"


const blogPage = ({data}) => {

    const posts = data.allContentfulPost.edges.map(
        edge => edge.node
    )

    return (

        <Layout>

            <Helmet>
                <title>blog</title>
            </Helmet>

            <PostList posts={posts}/>

        </Layout>

    )

}


export const blogPageQuery = graphql`
    {
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
