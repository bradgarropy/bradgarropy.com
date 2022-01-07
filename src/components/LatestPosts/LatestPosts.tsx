import PostTitle from "components/PostTitle"
import {FC} from "react"
import {PostFrontmatter} from "types/post"

import styles from "./LatestPosts.module.css"

type LatestPostsProps = {
    latestPosts: PostFrontmatter[]
}

const LatestPosts: FC<LatestPostsProps> = ({latestPosts}) => {
    return (
        <div className={styles.latestPosts}>
            {latestPosts.map(latestPost => {
                return (
                    <PostTitle
                        key={latestPost.slug}
                        title={latestPost.title}
                        slug={latestPost.slug}
                    />
                )
            })}
        </div>
    )
}

export default LatestPosts
