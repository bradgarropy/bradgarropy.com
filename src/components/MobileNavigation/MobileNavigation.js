import {useContext} from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {AppContext} from "../../context/App"
import Hamburger from "../Hamburger"

const MobileNavigationWrapper = styled.div`
    background: ${({theme}) => theme.colors.white};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    grid-template-rows: auto 1fr;
    z-index: 1;
    font-size: 2rem;
    overflow: hidden;
`

const CloseIcon = styled(FontAwesomeIcon)`
    margin: 1.25rem;
    cursor: pointer;
    justify-self: end;
`

const MobileNavigationLinks = styled.div`
    display: grid;
    grid-auto-flow: row;
    row-gap: 1rem;
    align-content: center;
    justify-content: center;
`

const MobileNavigationLink = styled(Link)`
    color: ${({theme}) => theme.colors.black};
`

const MobileNavigation = () => {
    const appContext = useContext(AppContext)
    const {open, setOpen} = appContext

    const onClick = () => {
        setOpen(false)
    }

    return open ? (
        <MobileNavigationWrapper>
            <CloseIcon icon={faTimes} onClick={onClick} />

            <MobileNavigationLinks>
                <MobileNavigationLink to="/blog">blog</MobileNavigationLink>
                <MobileNavigationLink to="/now">now</MobileNavigationLink>
                <MobileNavigationLink to="/uses">uses</MobileNavigationLink>
                <MobileNavigationLink to="/hire-me">
                    hire me
                </MobileNavigationLink>
                <MobileNavigationLink to="/contact">
                    contact
                </MobileNavigationLink>
            </MobileNavigationLinks>
        </MobileNavigationWrapper>
    ) : (
        <Hamburger />
    )
}

export default MobileNavigation
