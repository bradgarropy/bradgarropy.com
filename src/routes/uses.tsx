import type {MetaFunction} from "@remix-run/node"

const meta: MetaFunction = () => [
    {
        title: "💿 remix starter | uses",
    },
]

const IndexRoute = () => {
    return <h2 className="text-2xl font-bold">uses</h2>
}

export default IndexRoute
export {meta}
