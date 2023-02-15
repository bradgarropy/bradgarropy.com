import classnames from "classnames"
import Fuse from "fuse.js"
import {useRouter} from "next/router"
import {FC, useEffect} from "react"
import {useState} from "react"
import {PostFrontmatter} from "types/post"

type PostSearchBarProps = {
    posts: PostFrontmatter[]
    onSearch?: (posts: PostFrontmatter[]) => void
}

const PostSearchBar: FC<PostSearchBarProps> = ({posts, onSearch}) => {
    const router = useRouter()
    const defaultQuery = (router.query.search as string) || ""
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
            const url = query
                ? `${router.pathname}?search=${query}`
                : router.pathname

            router.push(url, undefined, {shallow: true})

            const newPosts = filterPosts(query)
            onSearch?.(newPosts)
        },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [query],
    )

    const onChange = event => {
        setQuery(event.target.value)
    }

    return (
        <input
            className={classnames(
                "border-3 border-black text-base shadow-box placeholder:text-gray-400 focus:border-purple-400 focus:outline-none",
                "mb-9 w-[85%] rounded border-3 border-black py-4 px-8 text-base shadow-box dark:shadow-box-white",
            )}
            type="text"
            placeholder="search blog"
            value={query}
            onChange={onChange}
        />
    )
}

export default PostSearchBar
