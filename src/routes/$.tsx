import type {MetaDescriptor, MetaFunction} from "@remix-run/node"
import FourOhFour from "components/FourOhFour"
import Layout from "components/Layout"
import type {FC} from "react"

export const meta: MetaFunction = () => {
    const meta: MetaDescriptor = {
        title: "🤷🏼‍♂️ not found",
    }

    return meta
}

const NotFoundRoute: FC = () => {
    return (
        <Layout>
            <FourOhFour />
        </Layout>
    )
}

export default NotFoundRoute
