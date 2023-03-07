import type {MetaDescriptor, MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import HireMe from "components/HireMe"
import Layout from "components/Layout"
import type {FC} from "react"
import {createImageUrl} from "utils/cloudinary"
import {getTestimonials} from "utils/testimonials"

const loader = async () => {
    const testimonials = await getTestimonials()
    return json({testimonials})
}

const meta: MetaFunction = () => {
    const meta: MetaDescriptor = {
        title: "🤝 let's work together",
    }

    return meta
}

const HireMeRoute: FC = () => {
    const {testimonials} = useLoaderData<typeof loader>()

    return (
        <Layout>
            {/* <SEO
                title="🤝 let's work together"
                facebook={{
                    image: createImageUrl("/pages/hire-me/hire-me.png"),
                }}
                twitter={{
                    image: createImageUrl("/pages/hire-me/hire-me.png"),
                    card: "summary_large_image",
                }}
            /> */}

            <HireMe testimonials={testimonials} />
        </Layout>
    )
}

export default HireMeRoute
export {loader, meta}
