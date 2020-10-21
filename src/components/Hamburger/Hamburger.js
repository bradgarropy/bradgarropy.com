import {useContext} from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {AppContext} from "../../context/App"

const HamburgerWrapper = styled(FontAwesomeIcon)`
    display: none;
    cursor: pointer;
    font-size: 1.5rem;

    @media (max-width: 500px) {
        display: block;
    }
`

const Hamburger = () => {
    const appContext = useContext(AppContext)
    const {setOpen} = appContext

    const onClick = () => {
        setOpen(true)
    }

    return <HamburgerWrapper icon={faBars} onClick={onClick} />
}

export default Hamburger
