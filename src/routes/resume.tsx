import SEO from "@bradgarropy/next-seo"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import Resume from "components/Resume"
import type {FC} from "react"
import {getMarkdownBySlug} from "utils/markdown"

const loader = async () => {
    const resume = await getMarkdownBySlug("resume")
    return json({resume})
}

const ResumeRoute: FC = () => {
    const {resume} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <SEO title="👔 resume" />
            <Resume resume={resume} />
        </Layout>
    )
}

export default ResumeRoute
export {loader}
