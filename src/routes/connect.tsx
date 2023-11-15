import type {MetaFunction} from "@remix-run/node"

import Connect from "~/components/Connect"
import PageLayout from "~/components/PageLayout"

export const meta: MetaFunction = () => [
    {
        title: "🤝 connect with me",
    },
]

const ConnectRoute = () => {
    return (
        <PageLayout>
            <Connect />
        </PageLayout>
    )
}

export default ConnectRoute
