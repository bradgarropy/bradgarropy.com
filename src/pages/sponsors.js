import SEO from "@bradgarropy/gatsby-plugin-seo"
import Sponsors from "components/Sponsors"
import {useSponsors} from "hooks"

const SponsorsPage = () => {
    const sponsors = useSponsors()

    return (
        <>
            <SEO title="💜 sponsors" />

            <Sponsors sponsors={sponsors} />
        </>
    )
}

export default SponsorsPage
