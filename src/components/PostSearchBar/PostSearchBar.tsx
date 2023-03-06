import {useSearchParams} from "@remix-run/react"
import Fuse from "fuse.js"
import type {ChangeEventHandler, FC} from "react"
import {useEffect} from "react"
import {useState} from "react"
import type {PostFrontmatter} from "types/post"

type PostSearchBarProps = {
    posts: PostFrontmatter[]
    onSearch?: (posts: PostFrontmatter[]) => void
}

const PostSearchBar: FC<PostSearchBarProps> = ({posts, onSearch}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const defaultQuery = searchParams.get("search") || ""
    const [query, setQuery] = useState(defaultQuery)

    const fuse = new Fuse(posts, {
        keys: ["title", "topic.name"],
    })

    const filterPosts = (query: string): PostFrontmatter[] => {
        if (!query) {
            return posts
        }

        const filteredPosts = fuse.search(query).map(result => result.item)
        return filteredPosts
    }

    useEffect(
        () => {
            query ? setSearchParams(`search=${query}`) : setSearchParams("")

            const newPosts = filterPosts(query)
            onSearch?.(newPosts)
        },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [query],
    )

    const onChange: ChangeEventHandler<HTMLInputElement> = event => {
        setQuery(event.target.value)
    }

    return (
        <input
            className="mb-9 w-[85%] rounded border-3 border-black py-4 px-8 text-base shadow-box placeholder:text-gray-400 focus:border-purple-400 focus:outline-none dark:shadow-box-white"
            type="text"
            placeholder="search blog"
            value={query}
            onChange={onChange}
        />
    )
}

export default PostSearchBar
