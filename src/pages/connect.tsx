import SEO from "@bradgarropy/next-seo"
import type {FC} from "react"

import Connect from "~/components/Connect"
import PageLayout from "~/components/PageLayout"

const ConnectPage: FC = () => {
    return (
        <PageLayout>
            <SEO title="🤝 connect with me" />
            <Connect />
        </PageLayout>
    )
}

export default ConnectPage
