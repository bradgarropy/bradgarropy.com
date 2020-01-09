import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import PostList from "../components/PostList"

const BlogPage = ({data}) => {
    const posts = data.posts.edges.map(edge => edge.node)

    return (
        <Layout>
            <Meta title="blog" />
            <Facebook title="✍🏼 blog" description="" />
            <Twitter title="✍🏼 blog" description="" />

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
