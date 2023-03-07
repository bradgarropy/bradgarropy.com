import type {MetaDescriptor, MetaFunction} from "@remix-run/node"
import Connect from "components/Connect"
import PageLayout from "components/PageLayout"
import type {FC} from "react"

const meta: MetaFunction = () => {
    const meta: MetaDescriptor = {
        title: "🤝 connect with me",
    }

    return meta
}

const ConnectRoute: FC = () => {
    return (
        <PageLayout>
            <Connect />
        </PageLayout>
    )
}

export default ConnectRoute
export {meta}
