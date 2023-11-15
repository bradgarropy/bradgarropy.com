import type {MetaFunction} from "@remix-run/node"

const meta: MetaFunction = () => [
    {
        title: "💿 remix starter | now",
    },
]

const IndexRoute = () => {
    return <h2 className="text-2xl font-bold">now</h2>
}

export default IndexRoute
export {meta}
