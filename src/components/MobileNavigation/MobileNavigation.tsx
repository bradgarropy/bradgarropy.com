import Link from "@bradgarropy/next-link"
import Hamburger from "components/Hamburger"
import Icon from "components/Icon"
import {useApp} from "hooks"
import {FC} from "react"

const MobileNavigation: FC = () => {
    const {open, setOpen} = useApp()

    const onClick = () => {
        setOpen(false)
    }

    return open ? (
        <div className="bg-white fixed inset-0 grid z-10 grid-rows-[auto_1fr] text-4xl overflow-hidden">
            <Icon
                name="close"
                className="text-black m-5 cursor-pointer justify-self-end"
                onClick={onClick}
            />

            <div className="grid grid-flow-row gap-y-4 content-center justify-center">
                <Link className="text-black hover:text-purple-400" to="/blog">
                    blog
                </Link>

                <Link className="text-black hover:text-purple-400" to="/now">
                    now
                </Link>

                <Link className="text-black hover:text-purple-400" to="/uses">
                    uses
                </Link>

                <Link
                    className="text-black hover:text-purple-400"
                    to="/hire-me"
                >
                    hire me
                </Link>

                <Link
                    className="text-black hover:text-purple-400"
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
