import {navigate, useLocation} from "@reach/router"
import Fuse from "fuse.js"
import {usePosts} from "hooks"
import PropTypes from "prop-types"
import {useEffect} from "react"
import {useState} from "react"
import styled from "styled-components"

const StyledSearch = styled.input`
    width: 75%;
    margin-block-end: 2.25rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
    border: 3px solid var(--black);
    border-radius: 0.3rem;
    box-shadow: 3px 3px 0 var(--black);
    color: var(--black);
    transition: all 300ms;

    ::placeholder {
        color: var(--darkGrey);
    }

    :focus {
        outline: none;
        border-color: var(--primary);
    }
`

const PostSearchBar = ({onSearch}) => {
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
        <StyledSearch
            type="text"
            placeholder="search blog"
            value={query}
            onChange={onChange}
        />
    )
}

PostSearchBar.propTypes = {
    onSearch: PropTypes.func,
}

export default PostSearchBar
