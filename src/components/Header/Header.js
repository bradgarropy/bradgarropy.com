import ColorTheme from "components/ColorTheme"
import Logo from "components/Logo"
import MobileNavigation from "components/MobileNavigation"
import Navigation from "components/Navigation"
import Streaming from "components/Streaming"
import {Link} from "gatsby"
import {useLive} from "hooks"
import styled from "styled-components"

const HeaderWrapper = styled.header`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem;

    a {
        display: inline-block;
    }
`

const Left = styled.div`
    display: grid;
    grid-auto-flow: column;
    column-gap: 2rem;
    align-items: center;
`

const Right = styled.div`
    display: grid;
    grid-auto-flow: column;
    column-gap: 2rem;
    align-items: center;
`

const Header = () => {
    const live = useLive()

    return (
        <HeaderWrapper>
            <Left>
                <Link to="/" aria-label="bg">
                    <Logo />
                </Link>

                {live && <Streaming />}
            </Left>

            <Right>
                <Navigation />
                <MobileNavigation />
                <ColorTheme />
            </Right>
        </HeaderWrapper>
    )
}

export default Header
