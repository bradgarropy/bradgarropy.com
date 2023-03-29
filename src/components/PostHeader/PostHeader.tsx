import PostMeta from "components/PostMeta"
import PostTitle from "components/PostTitle"
import type {FC} from "react"
import type {PostFrontmatter} from "types/post"

type PostHeaderProps = {
    date: PostFrontmatter["date"]
    topic: PostFrontmatter["topic"]
    title: PostFrontmatter["title"]
    slug?: PostFrontmatter["slug"]
}

const PostHeader: FC<PostHeaderProps> = ({date, topic, title, slug}) => {
    return (
        <section>
            <PostMeta date={date} topic={topic} />
            <PostTitle title={title} slug={slug} />
        </section>
    )
}

export default PostHeader
