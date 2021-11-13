import {Link} from "gatsby"
import {FC} from "react"
import {Post} from "types/post"

import * as styles from "./PostMeta.module.css"

type PostMetaProps = Pick<Post["frontmatter"], "date" | "topic">

const PostMeta: FC<PostMetaProps> = ({date, topic}) => {
    const {name} = topic

    return (
        <div className={styles.postMeta}>
            <p>
                {date} in <Link to={`/topic/${name}`}>#{name}</Link>
            </p>
        </div>
    )
}

export default PostMeta