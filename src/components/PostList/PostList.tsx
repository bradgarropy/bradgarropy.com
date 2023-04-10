import type {FC} from "react"

import PostCard from "~/components/PostCard"
import type {PostFrontmatter} from "~/types/post"

type PostListProps = {
    posts: PostFrontmatter[]
}

const PostList: FC<PostListProps> = ({posts}) => {
    if (!posts.length) {
        return (
            <div className="text-xl italic">
                <span className="not-italic">🤷🏼‍♂️</span> no posts found
            </div>
        )
    }

    return (
        <div className="grid gap-y-8">
            {posts.map((post, index) => {
                return <PostCard key={index} post={post} />
            })}
        </div>
    )
}

export default PostList
