import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import PostList from "../components/PostList"

const blogPage = ({location, data}) => {
    const posts = data.allMarkdownRemark.edges.map(edge => edge.node)

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

                <meta property="og:url" content={location.href}/>
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
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        date(formatString: "MMMM D, YYYY")
                        topic {
                            name
                            icon
                        }
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
