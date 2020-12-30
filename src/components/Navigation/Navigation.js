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

const NavigationLink = styled.a`
    color: ${({theme}) => theme.colors.black};

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`

const Navigation = () => {
    return (
        <NavigationWrapper>
            <Link href="/blog" passHref>
                <NavigationLink>blog</NavigationLink>
            </Link>

            <span>|</span>

            <Link href="/now" passHref>
                <NavigationLink>now</NavigationLink>
            </Link>

            <span>|</span>

            <Link href="/uses" passHref>
                <NavigationLink>uses</NavigationLink>
            </Link>

            <span>|</span>

            <Link href="/hire-me" passHref>
                <NavigationLink>hire me</NavigationLink>
            </Link>

            <span>|</span>

            <Link href="/contact" passHref>
                <NavigationLink>contact</NavigationLink>
            </Link>
        </NavigationWrapper>
    )
}

export default Navigation
