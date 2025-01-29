import {useLocation, useSearchParams} from "@remix-run/react"
import Fuse from "fuse.js"
import type {ChangeEventHandler, FC} from "react"
import {useEffect, useState} from "react"

import type {PostFrontmatter} from "~/types/post"

type PostSearchBarProps = {
    posts: PostFrontmatter[]
    onSearch?: (posts: PostFrontmatter[]) => void
}

const PostSearchBar: FC<PostSearchBarProps> = ({posts, onSearch}) => {
    const location = useLocation()
    const [searchParams] = useSearchParams()

    const defaultQuery = searchParams.get("query") ?? ""
    const [query, setQuery] = useState(defaultQuery)

    const fuse = new Fuse(posts, {
        keys: ["title", "topic", "tags"],
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
            const url = query
                ? `${location.pathname}?search=${query}`
                : location.pathname

            window.history.replaceState(null, "", url)

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
        <div className="mb-24">
            <label
                htmlFor="search"
                className="font-heading text-xl font-extrabold"
            >
                search
            </label>

            <input
                className="w-full rounded border-3 border-black px-8 py-4 text-base shadow-box placeholder:text-gray-400 focus:border-purple-400 focus:outline-hidden dark:shadow-box-white"
                type="search"
                id="search"
                placeholder="search by title, topic, or tag..."
                value={query}
                onChange={onChange}
                autoComplete="off"
            />
        </div>
    )
}

export default PostSearchBar
