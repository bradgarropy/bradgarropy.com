import Link from "@bradgarropy/next-link"
import classnames from "classnames"
import LinkButtonStyles from "components/LinkButton/LinkButton.module.css"
import {FC, ReactNode} from "react"

type LinkButtonProps = {
    to: string
    reverse?: boolean
    disabled?: boolean
    children?: ReactNode
}

const LinkButton: FC<LinkButtonProps> = ({
    to,
    reverse = false,
    disabled = false,
    ...props
}) => {
    const classes = classnames(LinkButtonStyles.linkButton, {
        [LinkButtonStyles.reverse]: reverse,
        [LinkButtonStyles.disabled]: disabled,
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
