import type {MetaDescriptor, MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import HireMe from "components/HireMe"
import Layout from "components/Layout"
import type {FC} from "react"
import {createImageUrl} from "utils/cloudinary"
import {getTestimonials} from "utils/testimonials"

export const loader = async () => {
    const testimonials = await getTestimonials()
    return json({testimonials})
}

export const meta: MetaFunction = () => {
    const meta: MetaDescriptor = {
        "title": "🤝 let's work together",
        "og:image": createImageUrl("/pages/hire-me/hire-me.png"),
        "twitter:card": "summary_large_image",
        "twitter:image": createImageUrl("/pages/hire-me/hire-me.png"),
    }

    return meta
}

const HireMeRoute: FC = () => {
    const {testimonials} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <HireMe testimonials={testimonials} />
        </Layout>
    )
}

export default HireMeRoute
