import classnames from "classnames"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"
import {Markdown} from "types/markdown"

import styles from "./Contact.module.css"

type ContactProps = {
    contact: Markdown
}

const Contact: FC<ContactProps> = ({contact}) => {
    return (
        <div
            className={classnames(LinkStyles.fancy, styles.contact)}
            dangerouslySetInnerHTML={{__html: contact.html}}
        />
    )
}

export default Contact
