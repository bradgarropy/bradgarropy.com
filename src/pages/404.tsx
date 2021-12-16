import SEO from "@bradgarropy/next-seo"
import FourOhFour from "components/FourOhFour"
import {FC} from "react"

const NotFoundPage: FC = () => {
    return (
        <>
            <SEO title="🤷🏼‍♂️ not found" />

            <FourOhFour />
        </>
    )
}

export default NotFoundPage
