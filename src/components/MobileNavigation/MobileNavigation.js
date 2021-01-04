import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Hamburger from "components/Hamburger"
import {AppContext} from "context/App"
import Link from "next/link"
import {useContext} from "react"
import styled from "styled-components"

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

const MobileNavigation = () => {
    const appContext = useContext(AppContext)
    const {open, setOpen} = appContext

    const onClick = () => {
        setOpen(false)
    }

    return open ? (
        <MobileNavigationWrapper>
            <CloseIcon icon={faTimes} onClick={onClick} aria-label="close" />

            <MobileNavigationLinks>
                <Link href="/blog" passHref>
                    <a>blog</a>
                </Link>

                <Link href="/now" passHref>
                    <a>now</a>
                </Link>

                <Link href="/uses" passHref>
                    <a>uses</a>
                </Link>

                <Link href="/hire-me" passHref>
                    <a>hire me</a>
                </Link>

                <Link href="/contact" passHref>
                    <a>contact</a>
                </Link>
            </MobileNavigationLinks>
        </MobileNavigationWrapper>
    ) : (
        <Hamburger />
    )
}

export default MobileNavigation
