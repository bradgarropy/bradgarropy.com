import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import {GetStaticProps} from "next"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"
import {Markdown} from "types/markdown"
import {getMarkdownBySlug} from "utils/markdown"

type UsesPageProps = {
    uses: Markdown
}

const UsesPage: FC<UsesPageProps> = ({uses}) => {
    return (
        <Layout>
            <SEO title="💠 uses" />

            <div
                className={LinkStyles.fancy}
                dangerouslySetInnerHTML={{__html: uses.html}}
            />
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
