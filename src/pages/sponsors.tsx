import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Sponsors from "components/Sponsors"
import {useSponsors} from "hooks"
import {FC} from "react"

const SponsorsPage: FC = () => {
    const sponsors = useSponsors()

    return (
        <Layout>
            <SEO title="💜 sponsors" />
            <Sponsors sponsors={sponsors} />
        </Layout>
    )
}

export default SponsorsPage
