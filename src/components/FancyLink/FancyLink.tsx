import Link from "@bradgarropy/next-link"
import {FC, ReactNode} from "react"

type FancyLinkProps = {
    to: string
    children?: ReactNode
}

const FancyLink: FC<FancyLinkProps> = ({children, to}) => {
    return (
        <Link
            className="transition duration-300 text-black shadow-link hover:text-black hover:shadow-link-hover"
            to={to}
        >
            {children}
        </Link>
    )
}

export default FancyLink
