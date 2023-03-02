import SEO from "@bradgarropy/next-seo"
import Connect from "components/Connect"
import PageLayout from "components/PageLayout"
import type {FC} from "react"

const ConnectRoute: FC = () => {
    return (
        <PageLayout>
            <SEO title="🤝 connect with me" />
            <Connect />
        </PageLayout>
    )
}

export default ConnectRoute
