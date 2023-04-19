import type {FC} from "react"

import Markdown from "~/components/Markdown"
import useMarkdown from "~/hooks/useMarkdown"
import type {Markdown as MarkdownType} from "~/types/markdown"

type UsesProps = {
    uses: MarkdownType
}

const Uses: FC<UsesProps> = ({uses}) => {
    const markdown = useMarkdown(uses.html)

    return (
        <div className="grid gap-y-9">
            <h1 className="font-heading text-[32px] font-semibold">💠 uses</h1>
            <Markdown content={markdown} />
        </div>
    )
}

export default Uses
