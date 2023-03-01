import Link from "@bradgarropy/next-link"
import type {FC, ReactNode} from "react"

type FancyLinkProps = {
    to: string
    children?: ReactNode
}

const FancyLink: FC<FancyLinkProps> = ({children, to}) => {
    return (
        <Link
            className="shadow-link transition duration-300 hover:shadow-link-hover"
            to={to}
        >
            {children}
        </Link>
    )
}

export default FancyLink
