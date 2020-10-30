import Fuse from "fuse.js"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import {useState} from "react"
import styled from "styled-components"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Layout from "components/Layout"
import Search from "components/Search"
import PostList from "components/PostList"

const Blog = styled.div``

const BlogPage = ({data}) => {
    const [posts, setPosts] = useState(data.posts.nodes)

    const fuse = new Fuse(posts, {
        keys: ["frontmatter.title", "frontmatter.topic.name"],
    })

    const onSearch = query => {
        if (!query) {
            setPosts(data.posts.nodes)
            return
        }

        const newPosts = fuse.search(query).map(result => result.item)
        setPosts(newPosts)
    }

    return (
        <Layout>
            <SEO title="✍🏼 blog" description="" />

            <Blog>
                <Search onSearch={onSearch} />
                <PostList posts={posts} />
            </Blog>
        </Layout>
    )
}

BlogPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const blogPageQuery = graphql`
    {
        posts: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/content/posts/"}}
            sort: {fields: frontmatter___date, order: DESC}
        ) {
            nodes {
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
`

export default BlogPage
