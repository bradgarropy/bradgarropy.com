import Footer from "components/Footer"
import Header from "components/Header"
import {AppProvider} from "context"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyles from "styles/GlobalStyles"

const Container = styled.div`
    min-height: 100vh;
    max-width: 1000px;
    margin: auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 2.5rem;
`

const Content = styled.main`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    max-width: 700px;
    justify-self: center;
    padding: 0rem 1.25rem;
`

const Layout = ({children}) => {
    return (
        <AppProvider>
            <GlobalStyles />

            <Container>
                <Header />
                <Content>{children}</Content>
                <Footer />
            </Container>
        </AppProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
