import "styles/fancyLinks.css"

import {useContact} from "hooks"
import {FC} from "react"

import styles from "./Contact.module.css"

const Contact: FC = () => {
    const contact = useContact()

    return (
        <div
            className={`fancyLinks ${styles.contact}`}
            dangerouslySetInnerHTML={{__html: contact}}
        />
    )
}

export default Contact
