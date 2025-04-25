import {useLoaderData} from "@remix-run/react"

import HireMe from "~/components/HireMe"
import Layout from "~/components/Layout"
import Meta from "~/components/Meta"
import {createImageUrl} from "~/utils/cloudinary"
import {getTestimonials} from "~/utils/testimonials"

export const loader = async () => {
    const testimonials = await getTestimonials()
    return {testimonials}
}

const HireMeRoute = () => {
    const {testimonials} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Meta
                title="🤝 let's work together"
                facebookImage={createImageUrl("/pages/hire-me/hire-me.png")}
                twitterImage={createImageUrl("/pages/hire-me/hire-me.png")}
                twitterCard="summary_large_image"
            />

            <HireMe testimonials={testimonials} />
        </Layout>
    )
}

export default HireMeRoute
