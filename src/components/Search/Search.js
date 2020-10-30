import PropTypes from "prop-types"
import {useState} from "react"
import styled from "styled-components"

const StyledSearch = styled.input`
    width: 75%;
    margin-block-end: 2.25rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
    border: 3px solid ${({theme}) => theme.colors.black};
    border-radius: 0.3rem;
    box-shadow: 3px 3px 0 ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.black};
    transition: all 300ms;

    ::placeholder {
        color: ${({theme}) => theme.colors.darkGrey};
    }

    :focus {
        outline: none;
        border-color: ${({theme}) => theme.colors.primary};
    }
`

const Search = ({onSearch}) => {
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
    onSearch: PropTypes.func.isRequired,
}

export default Search
