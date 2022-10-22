import classnames from "classnames"
import {useMarkdown} from "hooks"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"
import {Markdown} from "types/markdown"

import ContactStyles from "./Contact.module.css"

type ContactProps = {
    contact: Markdown
}

const Contact: FC<ContactProps> = ({contact}) => {
    const Markdown = useMarkdown(contact.html)

    return (
        <div
            className={classnames(
                LinkStyles.fancy,
                ContactStyles.contact,
                "place-self-center",
            )}
        >
            <h1>👋🏼 say hi</h1>
            {Markdown}
        </div>
    )
}

export default Contact
