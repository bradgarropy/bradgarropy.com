import "styles/shadesOfPurple.css"

import PropTypes from "prop-types"
import {ThemeProvider} from "styled-components"
import GlobalStyles from "styles/GlobalStyles"
import theme from "styles/theme"

const MyApp = ({Component, pageProps}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object,
}

export default MyApp
