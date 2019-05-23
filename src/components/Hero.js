import React from "react"
import styled from "styled-components"

const HeroWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    column-gap: 2rem;
    align-items: center;

    img {
        width: 25rem;
    }
`

const HeroText = styled.div`
    display: grid;
    font-size: 1.75rem;
`

const Hero = () => {
    return (
        <HeroWrapper>
            <img src="/bg-shadow.png" alt="bg shadow"/>

            <HeroText>
                <span>i use code</span>
                <span>to create things</span>
                <span>that benefit others</span>
            </HeroText>
        </HeroWrapper>
    )
}

export default Hero
