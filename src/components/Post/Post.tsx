import PostBody from "components/PostBody"
import PostFooter from "components/PostFooter"
import PostHeader from "components/PostHeader"
import {FC} from "react"
import {Post as PostType} from "types/post"

type PostProps = {
    post: PostType
}

const Post: FC<PostProps> = ({post}) => {
    const {html, frontmatter} = post
    const {slug, title, date, topic} = frontmatter

    return (
        <article>
            <PostHeader date={date} topic={topic} title={title} />
            <PostBody html={html} />
            <PostFooter slug={slug} />
        </article>
    )
}

export default Post
