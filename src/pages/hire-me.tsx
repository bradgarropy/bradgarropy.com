import SEO from "@bradgarropy/next-seo"
import HireMe from "components/HireMe"
import Layout from "components/Layout"
import {GetStaticProps} from "next"
import {FC} from "react"
import {Markdown} from "types/markdown"
import {Testimonial} from "types/testimonial"
import {createImageUrl} from "utils/cloudinary"
import {getMarkdownBySlug} from "utils/markdown"
import {getTestimonials} from "utils/testimonials"

type HireMePageProps = {
    hireMe: Markdown
    testimonials: Testimonial[]
}

const HireMePage: FC<HireMePageProps> = ({hireMe, testimonials}) => {
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

            <HireMe hireMe={hireMe} testimonials={testimonials} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const hireMe = await getMarkdownBySlug("hire-me")
    const testimonials = await getTestimonials()

    return {
        props: {
            hireMe,
            testimonials,
        },
    }
}

export default HireMePage
export {getStaticProps}
