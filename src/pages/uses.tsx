import "styles/fancyLinks.css"

import SEO from "@bradgarropy/next-seo"
import {graphql} from "gatsby"
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
        <>
            <SEO title="💠 uses" />

            <div
                className="fancyLinks"
                dangerouslySetInnerHTML={{__html: html}}
            />
        </>
    )
}

export const usesPageQuery = graphql`
    {
        uses: markdownRemark(
            fileAbsolutePath: {regex: "/content/pages/uses/"}
        ) {
            html
        }
    }
`

export default UsesPage
