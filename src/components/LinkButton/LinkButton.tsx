import Link from "@bradgarropy/gatsby-link"
import classnames from "classnames"
import {FC} from "react"

import * as styles from "./LinkButton.module.css"

type LinkButtonProps = {
    to: string
    reverse?: boolean
    disabled?: boolean
}

const LinkButton: FC<LinkButtonProps> = ({
    to,
    reverse = false,
    disabled = false,
    ...props
}) => {
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

export default LinkButton
