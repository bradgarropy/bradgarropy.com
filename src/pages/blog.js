import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Layout from "../components/Layout"
import PostList from "../components/PostList"

const BlogPage = ({data}) => {
    const posts = data.posts.edges.map(edge => edge.node)

    return (
        <Layout>
            <SEO title="✍🏼 blog" description="" />

            <PostList posts={posts} />
        </Layout>
    )
}

BlogPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const blogPageQuery = graphql`
    {
        posts: allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}
            filter: {fileAbsolutePath: {regex: "/content/posts/"}}
        ) {
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

export default BlogPage
