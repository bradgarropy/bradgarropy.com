import "styles/fancyLinks.css"

import PropTypes from "prop-types"

import * as styles from "./Resume.module.css"

const Resume = ({html}) => {
    return (
        <section
            className={`fancyLinks ${styles.resume}`}
            dangerouslySetInnerHTML={{__html: html}}
        />
    )
}

Resume.propTypes = {
    html: PropTypes.string.isRequired,
}

export default Resume
