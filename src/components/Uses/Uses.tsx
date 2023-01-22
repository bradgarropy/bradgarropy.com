import Markdown from "components/Markdown"
import {useMarkdown} from "hooks"
import {FC} from "react"
import {Markdown as MarkdownType} from "types/markdown"

type UsesProps = {
    uses: MarkdownType
}

const Uses: FC<UsesProps> = ({uses}) => {
    const markdown = useMarkdown(uses.html)

    return (
        <>
            <h1>💠 uses</h1>
            <Markdown content={markdown} />
        </>
    )
}

export default Uses
