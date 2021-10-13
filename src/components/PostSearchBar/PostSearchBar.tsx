import {navigate, useLocation} from "@reach/router"
import Fuse from "fuse.js"
import {usePosts} from "hooks"
import {FC, useEffect} from "react"
import {useState} from "react"
import {Post} from "types/post"

import * as styles from "./PostSearchBar.module.css"

type PostSearchBarProps = {
    onSearch?: (posts: Post[]) => void
}

const PostSearchBar: FC<PostSearchBarProps> = ({onSearch}) => {
    const posts = usePosts()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const defaultQuery = params.get("search") || ""
    const [query, setQuery] = useState(defaultQuery)

    const fuse = new Fuse(posts, {
        keys: ["frontmatter.title", "frontmatter.topic.name"],
    })

    const filterPosts = query => {
        if (!query) {
            return posts
        }

        const filteredPosts = fuse.search(query).map(result => result.item)
        return filteredPosts
    }

    useEffect(
        () => {
            const queryString = query ? `/blog?search=${query}` : "/blog"
            navigate(queryString, {replace: true})

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
            className={styles.search}
            type="text"
            placeholder="search blog"
            value={query}
            onChange={onChange}
        />
    )
}

export default PostSearchBar
