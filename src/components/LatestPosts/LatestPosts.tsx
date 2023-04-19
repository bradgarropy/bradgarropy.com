import type {FC} from "react"

import PostList from "~/components/PostList"
import type {PostFrontmatter} from "~/types/post"

type LatestPostsProps = {
    latestPosts: PostFrontmatter[]
}

const LatestPosts: FC<LatestPostsProps> = ({latestPosts}) => {
    return <PostList posts={latestPosts} />
}

export default LatestPosts
