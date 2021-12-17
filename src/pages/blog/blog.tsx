import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import PostList from "components/PostList"
import PostSearchBar from "components/PostSearchBar"
import {GetStaticProps} from "next"
import {FC, useState} from "react"
import {PostFrontmatter} from "types/post"
import {getAllPosts} from "utils/posts"

type BlogPageProps = {
    allPosts: PostFrontmatter[]
}

const BlogPage: FC<BlogPageProps> = ({allPosts}) => {
    const [posts, setPosts] = useState(allPosts)

    const onSearch = filteredPosts => {
        setPosts(filteredPosts)
    }

    return (
        <Layout>
            <SEO title="✍🏼 blog" />

            <div>
                <PostSearchBar posts={allPosts} onSearch={onSearch} />
                <PostList posts={posts} />
            </div>
        </Layout>
    )
}

const getStaticProps: GetStaticProps = () => {
    const allPosts = getAllPosts()

    return {
        props: {
            allPosts,
        },
    }
}

export default BlogPage
export {getStaticProps}
