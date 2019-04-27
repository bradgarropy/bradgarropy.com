import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Logo from "./Logo"

const NavigationWrapper = styled.nav`
    text-align: center;
    padding: 1.25rem 0rem;

    a {
        display: inline-block;
    }
`

const Navigation = () => {
    return (
        <NavigationWrapper>
            <Link to="/" aria-label="bg">
                <Logo/>
            </Link>
        </NavigationWrapper>
    )
}

export default Navigation
