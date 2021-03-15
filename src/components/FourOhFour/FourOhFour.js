import styled from "styled-components"

const FourOhFourWrapper = styled.div`
    display: grid;
    justify-items: center;
    font-family: "Righteous", cursive;
    font-size: 5rem;
`

const FourOhFour = () => {
    return (
        <FourOhFourWrapper>
            <h1>404</h1>
        </FourOhFourWrapper>
    )
}

export default FourOhFour
