import {useRouter} from "next/router"
import type {ChangeEventHandler, FC} from "react"
import {useState} from "react"

import type {PostFrontmatter} from "~/types/post"

type PostSearchBarProps = {
    posts: PostFrontmatter[]
    onSearch: (query: string) => void
}

const PostSearchBar: FC<PostSearchBarProps> = ({posts, onSearch}) => {
    const router = useRouter()
    const defaultQuery = (router.query.search as string) || ""
    const [query, setQuery] = useState(defaultQuery)

    const onChange: ChangeEventHandler<HTMLInputElement> = event => {
        setQuery(event.target.value)
        onSearch(event.target.value)
    }

    return (
        <div className="flex w-full flex-col">
            <label
                htmlFor="search"
                className="font-heading text-xl font-extrabold"
            >
                title
            </label>

            <input
                id="search"
                className="rounded border-3 border-black px-8 py-4 text-base shadow-box placeholder:text-gray-400 focus:border-purple-400 focus:outline-none dark:text-black dark:shadow-box-white"
                type="text"
                placeholder="search blog"
                value={query}
                onChange={onChange}
            />
        </div>
    )
}

export default PostSearchBar
