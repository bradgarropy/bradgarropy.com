import {faBars} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {AppContext} from "context/App"
import {useContext} from "react"
import styled from "styled-components"

const HamburgerWrapper = styled(FontAwesomeIcon)`
    display: none;
    cursor: pointer;
    font-size: 1.5rem;

    @media (max-width: 600px) {
        display: block;
    }
`

const Hamburger = () => {
    const appContext = useContext(AppContext)
    const {setOpen} = appContext

    const onClick = () => {
        setOpen(true)
    }

    return (
        <HamburgerWrapper aria-label="menu" icon={faBars} onClick={onClick} />
    )
}

export default Hamburger
