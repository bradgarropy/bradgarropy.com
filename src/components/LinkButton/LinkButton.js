import Link from "@bradgarropy/gatsby-link"
import classnames from "classnames"
import PropTypes from "prop-types"

import * as styles from "./LinkButton.module.css"

const LinkButton = ({to, reverse = false, disabled = false, ...props}) => {
    const classes = classnames(styles.linkButton, {
        [styles.reverse]: reverse,
        [styles.disabled]: disabled,
    })

    if (disabled) {
        return <span className={classes}>{props.children}</span>
    }

    return (
        <Link to={to} className={classes}>
            {props.children}
        </Link>
    )
}

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.string,
}

export default LinkButton
