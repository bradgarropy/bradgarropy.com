import Link from "@bradgarropy/next-link"
import classnames from "classnames"
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
    const classes = classnames(
        "transition duration-300 inline-block bg-white text-black py-2 px-3 rounded-[0.3rem] border-2 border-black shadow-box mb-1 font-text",
        {
            ["shadow-reverse-box"]: reverse,
            ["text-gray-300 border-gray-300 shadow-gray-300"]: disabled,
            ["hover:text-inherit hover:shadow-none"]: !disabled,
        },
    )

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
