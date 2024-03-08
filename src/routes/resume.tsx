import type {MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Resume from "~/components/Resume"
import {getMarkdownBySlug} from "~/utils/markdown.server"
import {getMeta} from "~/utils/meta"

export const loader = async () => {
    const resume = await getMarkdownBySlug("resume")
    return json({resume})
}

export const meta: MetaFunction = () => {
    const meta = getMeta({
        title: "👔 resume",
    })

    return meta
}

const ResumeRoute = () => {
    const {resume} = useLoaderData<typeof loader>()
    resume.frontmatter.data = 1

    return (
        <Layout>
            <Resume resume={resume} />
        </Layout>
    )
}

export default ResumeRoute
