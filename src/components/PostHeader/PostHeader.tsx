import PostMeta from "components/PostMeta"
import PostTitle from "components/PostTitle"
import {FC} from "react"
import {Post} from "types/post"

type PostHeaderProps = Pick<
    Post["frontmatter"],
    "date" | "topic" | "title" | "slug"
>

const PostHeader: FC<PostHeaderProps> = ({date, topic, title, slug}) => {
    return (
        <section>
            <PostMeta date={date} topic={topic} />
            <PostTitle title={title} slug={slug} />
        </section>
    )
}

export default PostHeader
