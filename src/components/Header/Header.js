import React from "react"
import Navigation from "./Navigation"
import {Link} from "gatsby"
import styled from "styled-components"
import Logo from "../Logo"

const HeaderWrapper = styled.nav`
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

            <Navigation/>
        </HeaderWrapper>
    )
}

export default Header
