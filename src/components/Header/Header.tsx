import {Link} from "@remix-run/react"
import ColorTheme from "components/ColorTheme"
import Logo from "components/Logo"
import MobileNavigation from "components/MobileNavigation"
import Navigation from "components/Navigation"
import Streaming from "components/Streaming"
import {useLive} from "hooks"
import type {FC} from "react"

const Header: FC = () => {
    const live = useLive()

    return (
        <header className="grid grid-flow-col items-center justify-between p-5">
            <div className="grid grid-flow-col items-center gap-x-8">
                <Link to="/" aria-label="bg">
                    <Logo />
                </Link>

                {live && <Streaming />}
            </div>

            <div className="grid grid-flow-col items-center gap-x-8">
                <Navigation />
                <MobileNavigation />
                <ColorTheme />
            </div>
        </header>
    )
}

export default Header
