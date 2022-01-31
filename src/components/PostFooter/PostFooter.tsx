import PostComments from "components/PostComments"
import PostEdit from "components/PostEdit"
import {FC} from "react"

import styles from "./PostFooter.module.css"

type PostFooterProps = {
    slug: string
}

const PostFooter: FC<PostFooterProps> = ({slug}) => {
    return (
        <section className={styles.postFooter}>
            <PostComments slug={slug} />
            <PostEdit slug={slug} />
        </section>
    )
}

export default PostFooter
