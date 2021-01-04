import Link from "next/link"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
    display: grid;
    grid-auto-flow: column;
    column-gap: 1.25rem;

    @media (max-width: 600px) {
        display: none;
    }
`

const Navigation = () => {
    return (
        <NavigationWrapper>
            <Link href="/blog" passHref>
                <a>blog</a>
            </Link>

            <span>|</span>

            <Link href="/now" passHref>
                <a>now</a>
            </Link>

            <span>|</span>

            <Link href="/uses" passHref>
                <a>uses</a>
            </Link>

            <span>|</span>

            <Link href="/hire-me" passHref>
                <a>hire me</a>
            </Link>

            <span>|</span>

            <Link href="/contact" passHref>
                <a>contact</a>
            </Link>
        </NavigationWrapper>
    )
}

export default Navigation
