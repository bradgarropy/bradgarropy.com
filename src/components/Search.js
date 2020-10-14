import PropTypes from "prop-types"
import React, {useState} from "react"
import styled from "styled-components"

const StyledSearch = styled.input`
    margin-block-end: 2.25rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
    border: 3px solid ${({theme}) => theme.colors.black};
    border-radius: 0.3rem;
    width: 75%;

    :focus {
        outline: none;
        border: 3px solid ${({theme}) => theme.colors.primary};
    }

    /* color: ${({theme}) => theme.colors.black};
    padding: 0.5rem 0.75rem;
    border-radius: 0.3rem;
    transition: all 300ms;
    border: 2px solid ${({theme}) => theme.colors.black};
    box-shadow: 3px 3px 0 ${({theme}) => theme.colors.black}; */

    /* border: 2px solid ${({theme}) => theme.colors.black};
    box-shadow: 0 5px 0 ${({theme}) => theme.colors.black}; */
`

const Search = ({onSearch = () => {}}) => {
    const [query, setQuery] = useState("")

    const onChange = event => {
        setQuery(event.target.value)
        onSearch(event.target.value)
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

Search.propTypes = {
    onSearch: PropTypes.func,
}

export default Search
