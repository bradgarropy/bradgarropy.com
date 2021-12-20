// import "styles/twitter.css"

import classnames from "classnames"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"

import PostBodyStyles from "./PostBody.module.css"

type PostBodyProps = {
    html: string
}

const PostBody: FC<PostBodyProps> = ({html}) => {
    return (
        <section
            className={classnames(PostBodyStyles.postBody, LinkStyles.fancy)}
            dangerouslySetInnerHTML={{
                __html: html,
            }}
        />
    )
}

export default PostBody
