import Markdown from "components/Markdown"
import {useMarkdown} from "hooks"
import {FC, useEffect} from "react"

type PostBodyProps = {
    html: string
}

const PostBody: FC<PostBodyProps> = ({html}) => {
    useEffect(() => {
        window.twttr?.widgets.load()
    }, [])

    const markdown = useMarkdown(html)
    return <Markdown className="my-9" content={markdown} />
}

export default PostBody
