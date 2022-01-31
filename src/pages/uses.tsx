import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import {useMarkdown} from "hooks"
import {GetStaticProps} from "next"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"
import {Markdown} from "types/markdown"
import {getMarkdownBySlug} from "utils/markdown"

type UsesPageProps = {
    uses: Markdown
}

const UsesPage: FC<UsesPageProps> = ({uses}) => {
    const Markdown = useMarkdown(uses.html)

    return (
        <Layout>
            <SEO title="💠 uses" />

            <h1>💠 uses</h1>
            <div className={LinkStyles.fancy}>{Markdown}</div>
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const uses = await getMarkdownBySlug("uses")

    return {
        props: {
            uses,
        },
    }
}

export default UsesPage
export {getStaticProps}
