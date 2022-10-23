import classnames from "classnames"
import {useMarkdown} from "hooks"
import {FC, useEffect} from "react"
import CodeStyles from "styles/Code.module.css"
import EmbedsStyles from "styles/Embeds.module.css"
import LinkStyles from "styles/Link.module.css"

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
                LinkStyles.fancy,
                CodeStyles.code,
                EmbedsStyles.embeds,
            )}
        >
            {Markdown}
        </section>
    )
}

export default PostBody
