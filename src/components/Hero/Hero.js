import Image from "next/image"
import styled from "styled-components"

const HeroWrapper = styled.div`
    align-self: center;
    justify-self: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    align-items: center;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

const HeroImage = styled.div`
    width: 100%;
    max-width: 15rem;
`

const HeroText = styled.div`
    display: grid;
    font-size: 1.75rem;
`

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroImage>
                <Image src="/bg-shadow.png" width={632} height={630} />
            </HeroImage>

            <HeroText>
                <span>i use code</span>
                <span>to create things</span>
                <span>that benefit others</span>
            </HeroText>
        </HeroWrapper>
    )
}

export default Hero
