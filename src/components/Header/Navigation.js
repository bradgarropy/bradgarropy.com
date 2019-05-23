import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
    display: grid;
    grid-auto-flow: column;
    column-gap: 1.25rem;
`

const NavigationLink = styled(Link)`
    color: ${({theme}) => theme.colors.black};
`

const Navigation = () => {
    return (
        <NavigationWrapper>
            <NavigationLink to="/blog">blog</NavigationLink>
            <span>|</span>
            <NavigationLink to="/uses">uses</NavigationLink>
            <span>|</span>
            <NavigationLink to="/hire-me">hire me</NavigationLink>
            <span>|</span>
            <NavigationLink to="/contact">contact</NavigationLink>
        </NavigationWrapper>
    )
}

export default Navigation
