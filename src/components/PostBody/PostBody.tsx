import type {FC} from "react"
import {useEffect} from "react"

import Markdown from "~/components/Markdown"
import useMarkdown from "~/hooks/useMarkdown"

type PostBodyProps = {
    html: string
}

const PostBody: FC<PostBodyProps> = ({html}) => {
    useEffect(() => {
        window.twttr?.widgets.load()
    }, [])

    const markdown = useMarkdown(html)
    return <Markdown className="my-16" content={markdown} />
}

export default PostBody
