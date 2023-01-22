import classnames from "classnames"
import {useMarkdown} from "hooks"
import {FC, useEffect} from "react"
import CodeStyles from "styles/Code.module.css"
import EmbedsStyles from "styles/Embeds.module.css"

type PostBodyProps = {
    html: string
}

const PostBody: FC<PostBodyProps> = ({html}) => {
    useEffect(() => {
        window.twttr?.widgets.load()
    }, [])

    const Markdown = useMarkdown(html)

    return (
        <section
            className={classnames(
                "my-9",
                CodeStyles.code,
                EmbedsStyles.embeds,
                "prose prose-purple prose-md max-w-3xl prose-a:shadow-link prose-a:no-underline prose-a:transition prose-a:duration-300 hover:prose-a:shadow-link-hover",
            )}
        >
            {Markdown}
        </section>
    )
}

export default PostBody
