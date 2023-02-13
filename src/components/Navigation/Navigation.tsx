import Link from "@bradgarropy/next-link"
import {FC} from "react"

const Navigation: FC = () => {
    return (
        <nav className="grid grid-flow-col gap-x-5 text-black transition duration-300 max-[800px]:hidden font-text">
            <Link
                className="transition duration-300 text-black hover:text-purple-400"
                to="/blog"
            >
                blog
            </Link>

            <span>|</span>

            <Link
                className="transition duration-300 text-black hover:text-purple-400"
                to="/now"
            >
                now
            </Link>

            <span>|</span>

            <Link
                className="transition duration-300 text-black hover:text-purple-400"
                to="/uses"
            >
                uses
            </Link>

            <span>|</span>

            <Link
                className="transition duration-300 text-black hover:text-purple-400"
                to="/hire-me"
            >
                hire me
            </Link>

            <span>|</span>

            <Link
                className="transition duration-300 text-black hover:text-purple-400"
                to="/contact"
            >
                contact
            </Link>
        </nav>
    )
}

export default Navigation
