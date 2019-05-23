import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import PostList from "../components/PostList"

const BlogPage = ({data}) => {
    const posts = data.allMarkdownRemark.edges.map(edge => edge.node)

    return (
        <Layout>
            <Meta title="blog"/>
            <Facebook/>
            <Twitter/>

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

BlogPage.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object,
}

export default BlogPage
