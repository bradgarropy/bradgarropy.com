import {faBars} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useApp} from "hooks"
import styled from "styled-components"

const HamburgerWrapper = styled(FontAwesomeIcon)`
    color: var(--text);
    display: none;
    cursor: pointer;
    font-size: 1.5rem;

    @media (max-width: 600px) {
        display: block;
    }
`

const Hamburger = () => {
    const {setOpen} = useApp()

    const onClick = () => {
        setOpen(true)
    }

    return (
        <HamburgerWrapper aria-label="menu" icon={faBars} onClick={onClick} />
    )
}

export default Hamburger
