import styled from "styled-components"

const Button = styled.a`
    display: inline-block;
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.black};
    padding: 0.5rem 0.75rem;
    border-radius: 0.3rem;
    transition: all 300ms;
    border: 2px solid ${({theme}) => theme.colors.black};

    &:hover {
        background: ${({theme}) => theme.colors.black};
        color: ${({theme}) => theme.colors.white};
    }
`

export default Button
