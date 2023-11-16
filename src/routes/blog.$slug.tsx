import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => [
    {
        title: "💿 remix starter | blog slug",
    },
]

const BlogRoute = () => {
    return <h2 className="text-2xl font-bold">blog slug</h2>
}

export default BlogRoute
