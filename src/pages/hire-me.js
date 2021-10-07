import "styles/fancyLinks.css"

import SEO from "@bradgarropy/gatsby-plugin-seo"
import Testimonials from "components/Testimonials"
import {useHireMe, useTestimonials} from "hooks"
import styled from "styled-components"

const HireMe = styled.div`
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

            <HireMe
                className="fancyLinks"
                dangerouslySetInnerHTML={{__html: hireMe}}
            />

            <h1 id="testimonials">💯 what people think of me</h1>
            <Testimonials testimonials={testimonials} />
        </>
    )
}

export default HireMePage
