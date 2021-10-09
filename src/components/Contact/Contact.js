import "styles/fancyLinks.css"

import {useContact} from "hooks"

import * as styles from "./Contact.module.css"

const Contact = () => {
    const contact = useContact()

    return (
        <div
            className={`fancyLinks ${styles.contact}`}
            dangerouslySetInnerHTML={{__html: contact}}
        />
    )
}

export default Contact
