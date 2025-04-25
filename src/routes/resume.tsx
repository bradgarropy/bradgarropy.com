import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Meta from "~/components/Meta"
import Resume from "~/components/Resume"
import {getMarkdownBySlug} from "~/utils/markdown.server"

export const loader = async () => {
    const resume = await getMarkdownBySlug("resume")
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
