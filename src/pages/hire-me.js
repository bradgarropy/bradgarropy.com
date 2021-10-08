import "styles/fancyLinks.css"

import SEO from "@bradgarropy/gatsby-plugin-seo"
import HireMe from "components/HireMe"
import {useHireMe, useTestimonials} from "hooks"

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

            <HireMe html={hireMe} testimonials={testimonials} />
        </>
    )
}

export default HireMePage
