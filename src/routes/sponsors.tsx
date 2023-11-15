import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => [
    {
        title: "💿 remix starter | sponsors",
    },
]

const IndexRoute = () => {
    return <h2 className="text-2xl font-bold">sponsors</h2>
}

export default IndexRoute
