import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Meta from "~/components/Meta"
import Resume from "~/components/Resume"
import {getPageBySlug} from "~/utils/pages"

export const loader = async () => {
    const resume = await getPageBySlug("resume")

    if (!resume) {
        throw new Response("Not Found", {status: 404})
    }

    return {resume}
}

const ResumeRoute = () => {
    const {resume} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Meta title="👔 resume" />
            <Resume resume={resume} />
        </Layout>
    )
}

export default ResumeRoute
