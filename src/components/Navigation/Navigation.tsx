import Link from "@bradgarropy/next-link"
import {FC} from "react"

import NavigationStyles from "./Navigation.module.css"

const Navigation: FC = () => {
    return (
        <nav className={NavigationStyles.navigation}>
            <Link className={NavigationStyles.link} to="/blog">
                blog
            </Link>

            <span>|</span>

            <Link className={NavigationStyles.link} to="/now">
                now
            </Link>

            <span>|</span>

            <Link className={NavigationStyles.link} to="/uses">
                uses
            </Link>

            <span>|</span>

            <Link className={NavigationStyles.link} to="/hire-me">
                hire me
            </Link>

            <span>|</span>

            <Link className={NavigationStyles.link} to="/contact">
                contact
            </Link>
        </nav>
    )
}

export default Navigation
