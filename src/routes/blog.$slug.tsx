import type {MetaFunction} from "@remix-run/node"

const meta: MetaFunction = () => [
    {
        title: "💿 remix starter | blog slug",
    },
]

const IndexRoute = () => {
    return <h2 className="text-2xl font-bold">blog slug</h2>
}

export default IndexRoute
export {meta}
