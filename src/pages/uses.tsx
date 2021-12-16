import "styles/fancyLinks.css"

import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import {FC} from "react"

type UsesPageProps = {
    data: {
        uses: {
            html: string
        }
    }
}

const UsesPage: FC<UsesPageProps> = ({data}) => {
    const {html} = data.uses

    return (
        <Layout>
            <SEO title="💠 uses" />

            <div
                className="fancyLinks"
                dangerouslySetInnerHTML={{__html: html}}
            />
        </Layout>
    )
}

export default UsesPage
