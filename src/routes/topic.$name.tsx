import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => [
    {
        title: "💿 remix starter | topic name",
    },
]

const IndexRoute = () => {
    return <h2 className="text-2xl font-bold">topic name</h2>
}

export default IndexRoute
