import Link from "@bradgarropy/next-link"
import {FC} from "react"
import {Post} from "types/post"

import PostStyles from "./PostTitle.module.css"

type PostTitleProps = {
    title: Post["frontmatter"]["title"]
    slug?: Post["frontmatter"]["slug"]
}

const PostTitle: FC<PostTitleProps> = ({title, slug}) => {
    return (
        <div className={PostStyles.postTitle}>
            <h1>{slug ? <Link to={`/blog/${slug}`}>{title}</Link> : title}</h1>
        </div>
    )
}

export default PostTitle
