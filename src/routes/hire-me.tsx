import type {MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import HireMe from "~/components/HireMe"
import Layout from "~/components/Layout"
import {createImageUrl} from "~/utils/cloudinary"
import {getTestimonials} from "~/utils/testimonials"

export const loader = async () => {
    const testimonials = await getTestimonials()
    return json({testimonials})
}

export const meta: MetaFunction = () => [
    {
        title: "🤝 let's work together",
    },
    {
        property: "og:image",
        content: createImageUrl("/pages/hire-me/hire-me.png"),
    },
    {
        property: "twitter:image",
        content: createImageUrl("/pages/hire-me/hire-me.png"),
    },
    {
        property: "twitter:card",
        content: "summary_large_image",
    },
]

const HireMeRoute = () => {
    const {testimonials} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <HireMe testimonials={testimonials} />
        </Layout>
    )
}

export default HireMeRoute
