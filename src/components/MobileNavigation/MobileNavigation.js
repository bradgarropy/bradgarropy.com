import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Hamburger from "components/Hamburger"
import {Link} from "gatsby"
import {useApp} from "hooks"
import styled from "styled-components"

const MobileNavigationWrapper = styled.div`
    background: var(--background);
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
    color: var(--text);
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
    color: var(--text);

    :hover {
        color: var(--primary);
    }
`

const MobileNavigation = () => {
    const {open, setOpen} = useApp()

    const onClick = () => {
        setOpen(false)
    }

    return open ? (
        <MobileNavigationWrapper>
            <CloseIcon icon={faTimes} onClick={onClick} aria-label="close" />

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
