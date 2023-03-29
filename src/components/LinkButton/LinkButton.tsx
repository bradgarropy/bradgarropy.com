import Link from "@bradgarropy/next-link"
import classnames from "classnames"
import type {FC, ReactNode} from "react"

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
        "transition duration-300 dark:text-black inline-block bg-white py-2 px-3 rounded border-2 border-black shadow-box dark:shadow-box-white mb-1",
        {
            ["shadow-reverse-box dark:shadow-reverse-box-white"]: reverse,
            ["text-gray-300 dark:text-gray-300 border-gray-300 shadow-gray-300"]:
                disabled,
            ["hover:text-inherit hover:shadow-none hover:dark:shadow-none"]:
                !disabled,
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
