import PostHeader from "components/PostHeader"
import {FC} from "react"
import {Post} from "types/post"

import styles from "./PostList.module.css"

type PostListProps = {
    posts: Post[]
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
                const {date, topic, title, slug} = post.frontmatter

                return (
                    <PostHeader
                        key={index}
                        date={date}
                        topic={topic}
                        title={title}
                        slug={slug}
                    />
                )
            })}
        </div>
    )
}

export default PostList
