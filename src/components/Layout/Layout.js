import theme from "styles/theme"
import PropTypes from "prop-types"
import Header from "components/Header"
import Footer from "components/Footer"
import GlobalStyles from "styles/GlobalStyles"
import styled, {ThemeProvider} from "styled-components"

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
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />

                <Container>
                    <Header />
                    <Content>{children}</Content>
                    <Footer />
                </Container>
            </>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
