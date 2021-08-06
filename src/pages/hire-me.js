import SEO from "@bradgarropy/gatsby-plugin-seo"
import Testimonials from "components/Testimonials"
import {useHireMe, useTestimonials} from "hooks"
import styled from "styled-components"
import {link} from "styles/partials"

const HireMe = styled.div`
    ${link}

    align-self: center;
    justify-self: center;
`

const HireMePage = () => {
    const hireMe = useHireMe()
    const testimonials = useTestimonials()

    return (
        <>
            <SEO
                title="🤝 let's work together"
                facebook={{
                    image: "https://bradgarropy.com/hire-me.png",
                }}
                twitter={{
                    image: "https://bradgarropy.com/hire-me.png",
                    card: "summary_large_image",
                }}
            />

            <HireMe dangerouslySetInnerHTML={{__html: hireMe}} />

            <h1 id="testimonials">💯 what people think of me</h1>
            <Testimonials testimonials={testimonials} />
        </>
    )
}

export default HireMePage
