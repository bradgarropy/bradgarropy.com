import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Resume from "components/Resume"
import type {GetStaticProps} from "next"
import type {FC} from "react"
import type {Markdown} from "types/markdown"
import {getMarkdownBySlug} from "utils/markdown"

type ResumePageProps = {
    resume: Markdown
}

const ResumePage: FC<ResumePageProps> = ({resume}) => {
    return (
        <Layout>
            <SEO title="👔 resume" />
            <Resume resume={resume} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const resume = await getMarkdownBySlug("resume")

    return {
        props: {
            resume,
        },
    }
}

export default ResumePage
export {getStaticProps}
