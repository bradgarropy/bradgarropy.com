import type {FC} from "react"
import {Link} from "react-router"

import Hamburger from "~/components/Hamburger"
import Icon from "~/components/Icon"
import useApp from "~/hooks/useApp"

const MobileNavigation: FC = () => {
    const {open, setOpen} = useApp()

    const onClick = () => {
        setOpen(false)
    }

    return open ? (
        <div className="fixed inset-0 z-10 grid grid-rows-[auto_1fr] overflow-hidden bg-white text-4xl dark:bg-black">
            <Icon
                name="close"
                className="m-5 cursor-pointer justify-self-end"
                onClick={onClick}
            />

            <div className="grid grid-flow-row content-center justify-center gap-y-4">
                <Link
                    prefetch="intent"
                    className="hover:text-purple-400"
                    to="/blog"
                >
                    blog
                </Link>

                <Link
                    prefetch="intent"
                    className="hover:text-purple-400"
                    to="/now"
                >
                    now
                </Link>

                <Link
                    prefetch="intent"
                    className="hover:text-purple-400"
                    to="/uses"
                >
                    uses
                </Link>

                <Link
                    prefetch="intent"
                    className="hover:text-purple-400"
                    to="/hire-me"
                >
                    hire me
                </Link>

                <Link
                    prefetch="intent"
                    className="hover:text-purple-400"
                    to="/contact"
                >
                    contact
                </Link>
            </div>
        </div>
    ) : (
        <Hamburger />
    )
}

export default MobileNavigation
