import Link from "@bradgarropy/next-link"
import {FC} from "react"

const Navigation: FC = () => {
    return (
        <nav className="grid grid-flow-col gap-x-5 max-[800px]:hidden">
            <Link className="duration-300 hover:text-purple-400" to="/blog">
                blog
            </Link>

            <span>|</span>

            <Link className="duration-300 hover:text-purple-400" to="/now">
                now
            </Link>

            <span>|</span>

            <Link className="duration-300 hover:text-purple-400" to="/uses">
                uses
            </Link>

            <span>|</span>

            <Link className="duration-300 hover:text-purple-400" to="/hire-me">
                hire me
            </Link>

            <span>|</span>

            <Link className="duration-300 hover:text-purple-400" to="/contact">
                contact
            </Link>
        </nav>
    )
}

export default Navigation
