import type {MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import HireMe from "~/components/HireMe"
import Layout from "~/components/Layout"
import {createImageUrl} from "~/utils/cloudinary"
import {getMeta} from "~/utils/meta"
import {getTestimonials} from "~/utils/testimonials"

export const loader = async () => {
    const testimonials = await getTestimonials()
    return json({testimonials})
}

export const meta: MetaFunction = () => {
    const meta = getMeta({
        title: "🤝 let's work together",
        facebookImage: createImageUrl("/pages/hire-me/hire-me.png"),
        twitterImage: createImageUrl("/pages/hire-me/hire-me.png"),
        twitterCard: "summary_large_image",
    })

    return meta
}

const HireMeRoute = () => {
    const {testimonials} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <HireMe testimonials={testimonials} />
        </Layout>
    )
}

export default HireMeRoute
