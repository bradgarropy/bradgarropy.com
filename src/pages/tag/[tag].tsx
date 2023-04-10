import SEO from "@bradgarropy/next-seo"
import type {GetStaticPaths, GetStaticProps} from "next"
import type {FC} from "react"

import Layout from "~/components/Layout"
import PostList from "~/components/PostList"
import type {PostFrontmatter, Tag} from "~/types/post"
import {getPostsByTag, getTags} from "~/utils/posts"

type TagPageProps = {
    tag: Tag
    posts: PostFrontmatter[]
}

const TagPage: FC<TagPageProps> = ({tag, posts}) => {
    return (
        <Layout>
            <SEO title={`tag | ${tag}`} />

            <div className="self-start">
                <h1 className="mb-16 flex flex-col items-center gap-y-2">
                    <span className="font-heading text-4xl font-semibold">
                        posts tagged
                    </span>

                    <span className="rounded-lg bg-black px-6 py-1 text-center font-heading text-6xl font-bold text-white dark:bg-white dark:text-black">
                        {tag}
                    </span>
                </h1>

                <PostList posts={posts} />
            </div>
        </Layout>
    )
}

const getStaticProps: GetStaticProps = context => {
    const tag = context.params.tag as Tag
    const posts = getPostsByTag(tag)

    return {
        props: {
            tag,
            posts,
        },
    }
}

const getStaticPaths: GetStaticPaths = () => {
    const tags = getTags()

    const paths = tags.map(tag => {
        return {
            params: {
                tag,
            },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export default TagPage
export {getStaticPaths, getStaticProps}
