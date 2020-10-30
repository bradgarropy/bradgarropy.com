import theme from "styles/theme"
import {render} from "@testing-library/react"
import {ThemeProvider} from "styled-components"

const Providers = ({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui, options) =>
    render(ui, {wrapper: Providers, ...options})

export * from "@testing-library/react"
export {customRender as render}
