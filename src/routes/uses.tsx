import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => [
    {
        title: "💿 remix starter | uses",
    },
]

const UsesRoute = () => {
    return <h2 className="text-2xl font-bold">uses</h2>
}

export default UsesRoute
