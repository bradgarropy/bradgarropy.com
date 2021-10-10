import "styles/fancyLinks.css"

import SEO from "@bradgarropy/gatsby-plugin-seo"
import HireMe from "components/HireMe"
import {FC} from "react"

const HireMePage: FC = () => {
    return (
        <>
            <SEO
                title="🤝 let's work together"
                facebook={{
                    image: "https://bradgarropy.com/hire-me.png",
                }}
                twitter={{
                    image: "https://bradgarropy.com/hire-me.png",
                    card: "summary_large_image",
                }}
            />

            <HireMe />
        </>
    )
}

export default HireMePage
