import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import PostList from "../components/PostList"

const blogPage = ({data}) => {
    const {url, title, description} = data.site.siteMetadata
    const posts = data.allMarkdownRemark.edges.map(edge => edge.node)

    return (
        <Layout>
            <Helmet>
                <title>blog</title>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={`${url}/twitter.webp`}/>

                <meta property="og:url" content={url}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={`${url}/facebook.webp`}/>
            </Helmet>

            <PostList posts={posts}/>
        </Layout>
    )
}

export const blogPageQuery = graphql`
    {
        site {
            siteMetadata {
                url
                title
                description
            }
        }
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
