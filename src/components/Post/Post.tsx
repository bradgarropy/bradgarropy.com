import type {FC} from "react"

import PostBody from "~/components/PostBody"
import PostFooter from "~/components/PostFooter"
import PostHeader from "~/components/PostHeader"
import type {Post as PostType} from "~/types/post"

type PostProps = {
    post: PostType
}

const Post: FC<PostProps> = ({post}) => {
    const {html, frontmatter} = post
    const {slug, title, date, topic, tags} = frontmatter

    return (
        <article>
            <PostHeader date={date} tags={tags} topic={topic} title={title} />
            <PostBody html={html} />
            <PostFooter slug={slug} />
        </article>
    )
}

export default Post
