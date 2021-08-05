import SEO from "@bradgarropy/gatsby-plugin-seo"
import Testimonials from "components/Testimonials"
import {useTestimonials} from "hooks"
// import styled from "styled-components"
// import {link} from "styles/partials"

// const HireMe = styled.div`
//     ${link}

//     align-self: center;
//     justify-self: center;
// `

const HireMePage = () => {
    // const hireMe = useHireMe()
    const testimonials = useTestimonials()

    return (
        <>
            <SEO
                title="🤝 let's work together"
                description=""
                image="/hire-me.png"
            />

            {/* <HireMe dangerouslySetInnerHTML={{__html: hireMe}} /> */}

            <h1 id="work-together">🤝 let&apos;s work together</h1>
            <p>
                I&apos;m always open to discussing new opportunities for full
                time work or freelance clients. Please check out my{" "}
                <a href="/resume">resume</a> and <a href="/contact">contact</a>{" "}
                me!
            </p>

            <h1 id="testimonials">💯 what people think of me</h1>
            <Testimonials testimonials={testimonials} />
        </>
    )
}

export default HireMePage
