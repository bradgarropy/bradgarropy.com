import {Link} from "@remix-run/react"
import type {FC, ReactNode} from "react"

type FancyLinkProps = {
    to: string
    children?: ReactNode
}

const FancyLink: FC<FancyLinkProps> = ({children, to}) => {
    return (
        <Link
            className="underline decoration-purple-400 decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-purple-600 dark:hover:decoration-purple-300"
            to={to}
            prefetch="intent"
        >
            {children}
        </Link>
    )
}

export default FancyLink
