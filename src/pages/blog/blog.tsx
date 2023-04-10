import SEO from "@bradgarropy/next-seo"
import Fuse from "fuse.js"
import type {GetStaticProps} from "next"
import type {FC} from "react"
import {useEffect} from "react"
import {useState} from "react"

import Layout from "~/components/Layout"
import PostList from "~/components/PostList"
import PostSearchBar from "~/components/PostSearchBar"
import TagFilter from "~/components/TagFilter/TagFilter"
import type {PostFrontmatter, Tag} from "~/types/post"
import {getAllPosts} from "~/utils/posts"

type BlogPageProps = {
    allPosts: PostFrontmatter[]
    tags: Tag[]
}

const BlogPage: FC<BlogPageProps> = ({allPosts, tags}) => {
    const [posts, setPosts] = useState(allPosts)
    const [query, setQuery] = useState()
    const [filter, setFilter] = useState()

    const fuse = new Fuse(posts, {
        keys: ["title"],
    })

    const filterPosts = (query: string): PostFrontmatter[] => {
        if (!query) {
            return posts
        }

        const filteredPosts = fuse.search(query).map(result => result.item)
        return filteredPosts
    }

    // useEffect(
    //     () => {
    //         const url = query
    //             ? `${router.pathname}?search=${query}`
    //             : router.pathname

    //         router.push(url, undefined, {shallow: true})

    //         const newPosts = filterPosts(query)
    //         setPosts(newPosts)
    //     },

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     [query],
    // )

    const onSearch = (query: string) => {
        console.log(`onSearch: ${query}`)
    }

    const onFilter = (tag: Tag) => {
        console.log(`onFilter: ${tag}`)
    }

    return (
        <Layout>
            <SEO title="✍🏼 blog" />

            <div>
                <div className="mb-16 grid grid-cols-[70fr,30fr] justify-between gap-x-6">
                    <PostSearchBar posts={allPosts} onSearch={onSearch} />
                    <TagFilter tags={tags} onFilter={onFilter} />
                </div>

                <PostList posts={posts} />
            </div>
        </Layout>
    )
}

const getStaticProps: GetStaticProps = () => {
    const allPosts = getAllPosts()
    const duplicateTags = allPosts.flatMap(post => post.tags)
    const tags = [...new Set(duplicateTags)]
    const sortedTags = tags.sort()

    return {
        props: {
            allPosts,
            tags: sortedTags,
        },
    }
}

export default BlogPage
export {getStaticProps}
