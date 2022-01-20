import classnames from "classnames"
import Script from "next/script"
import {FC, useEffect} from "react"
import CodeStyles from "styles/Code.module.css"
import LinkStyles from "styles/Link.module.css"

import PostBodyStyles from "./PostBody.module.css"

type PostBodyProps = {
    html: string
}

const PostBody: FC<PostBodyProps> = ({html}) => {
    useEffect(() => {
        window.twttr?.widgets.load()
    }, [])

    return (
        <section
            className={classnames(
                PostBodyStyles.postBody,
                LinkStyles.fancy,
                CodeStyles.code,
            )}
            dangerouslySetInnerHTML={{
                __html: html,
            }}
        />
    )
}

export default PostBody
