import {render} from "@testing-library/react"
import PropTypes from "prop-types"
import {ThemeProvider} from "styled-components"
import theme from "styles/theme"

const Providers = ({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

Providers.propTypes = {
    children: PropTypes.node,
}

const customRender = (ui, options) =>
    render(ui, {wrapper: Providers, ...options})

export * from "@testing-library/react"
export {customRender as render}
