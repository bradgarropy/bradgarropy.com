import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const HeroWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    column-gap: 2rem;
    align-items: center;
`

const HeroImage = styled(Img)`
    width: 25rem;
`

const HeroText = styled.div`
    display: grid;
    font-size: 1.75rem;

    @media (max-width: 500px) {
        font-size: 1.25rem;
    }

    @media (max-width: 400px) {
        font-size: 1rem;
    }
`

const Hero = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "bg-shadow.png"}) {
                id
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <HeroWrapper>
            <HeroImage fluid={data.file.childImageSharp.fluid}/>

            <HeroText>
                <span>i use code</span>
                <span>to create things</span>
                <span>that benefit others</span>
            </HeroText>
        </HeroWrapper>
    )
}

export default Hero
