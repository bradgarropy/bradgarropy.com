import type {MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Resume from "~/components/Resume"
import {getMarkdownBySlug} from "~/utils/markdown"

export const loader = async () => {
    const resume = await getMarkdownBySlug("resume")
    return json({resume})
}

export const meta: MetaFunction = () => [
    {
        title: "👔 resume",
    },
]

const ResumeRoute = () => {
    const {resume} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Resume resume={resume} />
        </Layout>
    )
}

export default ResumeRoute
