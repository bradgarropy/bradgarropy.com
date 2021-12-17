import PostHeader from "components/PostHeader"
import {FC} from "react"
import {PostFrontmatter} from "types/post"

import styles from "./PostList.module.css"

type PostListProps = {
    posts: PostFrontmatter[]
}

const PostList: FC<PostListProps> = ({posts}) => {
    if (!posts.length) {
        return (
            <div className={styles.noPosts}>
                <span>🤷🏼‍♂️</span> no posts found
            </div>
        )
    }

    return (
        <div className={styles.postList}>
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
