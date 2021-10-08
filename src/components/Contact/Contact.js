import "styles/fancyLinks.css"

import PropTypes from "prop-types"

import * as styles from "./Contact.module.css"

const Contact = ({html}) => {
    return (
        <div
            className={`fancyLinks ${styles.contact}`}
            dangerouslySetInnerHTML={{__html: html}}
        />
    )
}

Contact.propTypes = {
    html: PropTypes.string.isRequired,
}

export default Contact
