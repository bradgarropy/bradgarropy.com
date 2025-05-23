import {Link} from "@remix-run/react"
import classnames from "classnames"
import type {FC} from "react"

import PostMeta from "~/components/PostMeta"
import type {PostFrontmatter} from "~/types/post"

type PostCardProps = {
    post: PostFrontmatter
    className?: string
}

const PostCard: FC<PostCardProps> = ({post, className}) => {
    return (
        <div
            className={classnames(
                "shadow-box dark:shadow-box-white rounded border-3 border-black px-8 py-8 duration-300 hover:shadow-none dark:border-white dark:hover:shadow-none",
                className,
            )}
        >
            <h1 className="font-heading mb-10 text-3xl font-semibold max-[750px]:text-2xl">
                <Link
                    prefetch="intent"
                    to={`/blog/${post.slug}`}
                    className="transition duration-300 hover:text-purple-400"
                >
                    {post.title}
                </Link>
            </h1>

            <PostMeta date={post.date} tags={post.tags} topic={post.topic} />
        </div>
    )
}

export default PostCard
