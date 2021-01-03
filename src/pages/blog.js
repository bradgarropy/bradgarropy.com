import Layout from "components/Layout"
import PostList from "components/PostList"
import Search from "components/Search"
import SEO from "components/SEO"
import Fuse from "fuse.js"
import {getPostsFrontmatter} from "lib/post"
import PropTypes from "prop-types"
import {useState} from "react"
import styled from "styled-components"

const Blog = styled.div``

const BlogPage = ({posts}) => {
    const [results, setResults] = useState(posts)

    const fuse = new Fuse(posts, {
        keys: ["title", "topic.name"],
    })

    const onSearch = query => {
        if (!query) {
            setResults(posts)
            return
        }

        const newPosts = fuse.search(query).map(result => result.item)
        setResults(newPosts)
    }

    return (
        <Layout>
            <SEO title="✍🏼 blog" description="" />

            <Blog>
                <Search onSearch={onSearch} />
                <PostList posts={results} />
            </Blog>
        </Layout>
    )
}

BlogPage.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const getStaticProps = async () => {
    const posts = getPostsFrontmatter()
    return {props: {posts}}
}

export default BlogPage
export {getStaticProps}
