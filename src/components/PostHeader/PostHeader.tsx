import type {FC} from "react"

import PostMeta from "~/components/PostMeta"
import type {PostFrontmatter} from "~/types/post"

type PostHeaderProps = {
    date: PostFrontmatter["date"]
    tags: PostFrontmatter["tags"]
    topic: PostFrontmatter["topic"]
    title: PostFrontmatter["title"]
}

const PostHeader: FC<PostHeaderProps> = ({date, tags, topic, title}) => {
    return (
        <section>
            <PostMeta date={date} topic={topic} tags={tags} />

            <h1 className="font-heading mt-6 text-4xl font-semibold">
                {title}
            </h1>
        </section>
    )
}

export default PostHeader
