import type {MetaFunction} from "@remix-run/node"

import Connect from "~/components/Connect"
import PageLayout from "~/components/PageLayout"
import {getMeta} from "~/utils/meta"

export const meta: MetaFunction = () => {
    const meta = getMeta({
        title: "🤝 connect with me",
    })

    return meta
}

const ConnectRoute = () => {
    return (
        <PageLayout>
            <Connect />
        </PageLayout>
    )
}

export default ConnectRoute
