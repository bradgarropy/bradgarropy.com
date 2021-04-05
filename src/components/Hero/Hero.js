import {StaticImage} from "gatsby-plugin-image"
import styled from "styled-components"

const HeroWrapper = styled.div`
    align-self: center;
    align-items: start;
    justify-self: center;
    display: grid;
    grid-template-columns: minmax(auto, 15.625rem) auto;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

const HeroImage = styled.div`
    .hero-image-container {
        border-radius: 100%;
    }

    .hero-image {
        box-sizing: border-box;
        border-radius: 100%;
        box-sizing: border-box;
        border: 7px solid ${({theme}) => theme.colors.black};
        background-color: ${({theme}) => theme.colors.black};
    }

    @media (max-width: 700px) {
        .hero-image-container {
            margin: auto;
            width: 80%;
            height: auto;
        }
    }
`

const Headline = styled.h1`
    margin: 0;
    letter-spacing: -0.2rem;
    font-weight: 900;
    font-size: 3rem;

    @media (max-width: 700px) {
        position: static;
    }

    @media (max-width: 500px) {
        font-size: 2.5rem;
    }
`

const Description = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: start;
    justify-items: center;
    column-gap: 0.75rem;
    padding-left: 2.5rem;
    line-height: 1.5;

    h2,
    span {
        font-size: 1.5rem;
        margin: 0rem;
        font-weight: 500;
        font-family: "Open Sans", sans-serif;
    }

    h2 {
        justify-self: start;
    }
`

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroImage>
                <StaticImage
                    src="https://github.com/bradgarropy.png"
                    alt="bg"
                    placeholder="blurred"
                    layout="fullWidth"
                    className="hero-image-container"
                    imgClassName="hero-image"
                />
            </HeroImage>

            <div>
                <Headline>i&apos;m brad garropy</Headline>

                <Description>
                    <h2>lead frontend developer</h2>
                    <span>👨🏼‍💻</span>

                    <h2>growing content creator</h2>
                    <span>🎥</span>

                    <h2>side project connoisseur</h2>
                    <span>🥃</span>

                    <h2>open source maintainer</h2>
                    <span>✨</span>
                </Description>
            </div>
        </HeroWrapper>
    )
}

export default Hero
