import Navigation from "./Navigation"
import MobileNavigation from "./MobileNavigation"
import {Link} from "gatsby"
import styled from "styled-components"
import Logo from "../Logo"
import {AppProvider} from "../../context/App"

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

const Header = () => {
    return (
        <HeaderWrapper>
            <Link to="/" aria-label="bg">
                <Logo/>
            </Link>

            <AppProvider>
                <Navigation/>
                <MobileNavigation/>
            </AppProvider>
        </HeaderWrapper>
    )
}

export default Header
