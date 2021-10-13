import "styles/fancyLinks.css"
import "styles/twitter.css"

import {FC} from "react"

import * as styles from "./PostBody.module.css"

type PostBodyProps = {
    content: string
}

const PostBody: FC<PostBodyProps> = ({content}) => {
    return (
        <section
            className={`fancyLinks ${styles.postBody}`}
            dangerouslySetInnerHTML={{
                __html: content,
            }}
        />
    )
}

export default PostBody
