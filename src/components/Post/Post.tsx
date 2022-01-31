import PostBody from "components/PostBody"
import PostFooter from "components/PostFooter"
import PostHeader from "components/PostHeader"
import {FC} from "react"

import styles from "./Post.module.css"

type PostProps = {
    post: {
        html: string
        frontmatter: {
            slug: string
            title: string
            date: string
            topic: {
                icon: string
                name: string
            }
        }
    }
}

const Post: FC<PostProps> = ({post}) => {
    const {html, frontmatter} = post
    const {slug, title, date, topic} = frontmatter

    return (
        <article className={styles.post}>
            <PostHeader date={date} topic={topic} title={title} />
            <PostBody html={html} />
            <PostFooter slug={slug} />
        </article>
    )
}

export default Post
