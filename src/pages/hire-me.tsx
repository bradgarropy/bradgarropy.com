import SEO from "@bradgarropy/next-seo"
import type {GetStaticProps} from "next"
import type {FC} from "react"

import HireMe from "~/components/HireMe"
import Layout from "~/components/Layout"
import type {Testimonial} from "~/types/testimonial"
import {createImageUrl} from "~/utils/cloudinary"
import {getTestimonials} from "~/utils/testimonials"

type HireMePageProps = {
    testimonials: Testimonial[]
}

const HireMePage: FC<HireMePageProps> = ({testimonials}) => {
    return (
        <Layout>
            <SEO
                title="🤝 let's work together"
                facebook={{
                    image: createImageUrl("/pages/hire-me/hire-me.png"),
                }}
                twitter={{
                    image: createImageUrl("/pages/hire-me/hire-me.png"),
                    card: "summary_large_image",
                }}
            />

            <HireMe testimonials={testimonials} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const testimonials = await getTestimonials()

    return {
        props: {
            testimonials,
        },
    }
}

export default HireMePage
export {getStaticProps}
