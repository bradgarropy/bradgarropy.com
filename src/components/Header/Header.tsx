import Link from "@bradgarropy/next-link"
import ColorTheme from "components/ColorTheme"
import Logo from "components/Logo"
import MobileNavigation from "components/MobileNavigation"
import Navigation from "components/Navigation"
import Streaming from "components/Streaming"
import {useLive} from "hooks"
import {FC} from "react"

const Header: FC = () => {
    const live = useLive()

    return (
        <header className="grid grid-flow-col justify-between items-center p-5">
            <div className="grid grid-flow-col gap-x-8 items-center">
                <Link to="/" aria-label="bg">
                    <Logo />
                </Link>

                {live && <Streaming />}
            </div>

            <div className="grid grid-flow-col gap-x-8 items-center">
                <Navigation />
                <MobileNavigation />
                <ColorTheme />
            </div>
        </header>
    )
}

export default Header
