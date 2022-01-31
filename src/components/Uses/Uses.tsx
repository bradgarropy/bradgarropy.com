import classnames from "classnames"
import {useMarkdown} from "hooks"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"
import {Markdown} from "types/markdown"

import UsesStyles from "./Uses.module.css"

type UsesProps = {
    uses: Markdown
}

const Uses: FC<UsesProps> = ({uses}) => {
    const Markdown = useMarkdown(uses.html)

    return (
        <>
            <h1>💠 uses</h1>

            <div className={classnames(LinkStyles.fancy, UsesStyles.content)}>
                {Markdown}
            </div>
        </>
    )
}

export default Uses
