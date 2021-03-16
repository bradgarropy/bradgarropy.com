import {StaticImage} from "gatsby-plugin-image"
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
    max-width: 25rem;
`

const HeroText = styled.div`
    display: grid;
    font-size: 1.75rem;
`

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroImage>
                <StaticImage
                    src="../../../static/bg-shadow.png"
                    alt="bg"
                    placeholder="blurred"
                    layout="fullWidth"
                />
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
