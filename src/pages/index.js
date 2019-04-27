import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import PostList from "../components/PostList"

const blogPage = props => {
    const posts = props.data.allContentfulPost.edges.map(edge => edge.node)

    return (
        <Layout>
            <Helmet>
                <title>blog</title>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:title" content="bradgarropy"/>
                <meta
                    name="twitter:description"
                    content="🏠 my home on the web"
                />
                <meta
                    name="twitter:image"
                    content="https://bradgarropy.com/twitter.webp"
                />

                <meta property="og:url" content={props.location.href}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="bradgarropy"/>
                <meta
                    property="og:description"
                    content="🏠 my home on the web"
                />
                <meta
                    property="og:image"
                    content="https://bradgarropy.com/facebook.webp"
                />
            </Helmet>

            <PostList posts={posts}/>
        </Layout>
    )
}

export const blogPageQuery = graphql`
    {
        allContentfulPost(sort: {fields: [date], order: DESC}) {
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
    location: PropTypes.object,
}

export default blogPage
