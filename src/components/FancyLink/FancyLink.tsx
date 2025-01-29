import {Link} from "@remix-run/react"
import type {FC, ReactNode} from "react"

type FancyLinkProps = {
    to: string
    children?: ReactNode
}

const FancyLink: FC<FancyLinkProps> = ({children, to}) => {
    return (
        <Link
            className="shadow-link hover:shadow-link-hover transition duration-300"
            to={to}
            prefetch="intent"
        >
            {children}
        </Link>
    )
}

export default FancyLink
