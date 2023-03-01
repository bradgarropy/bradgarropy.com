import PostHeader from "components/PostHeader"
import type {FC} from "react"
import type {PostFrontmatter} from "types/post"

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
        <div className="grid gap-y-9">
            {posts.map((post, index) => {
                return (
                    <PostHeader
                        key={index}
                        date={post.date}
                        topic={post.topic}
                        title={post.title}
                        slug={post.slug}
                    />
                )
            })}
        </div>
    )
}

export default PostList
