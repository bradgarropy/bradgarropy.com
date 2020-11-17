import "jest-styled-components"
import "@testing-library/jest-dom"

jest.mock("gatsby", () => {
    const React = require("react")
    const gatsby = jest.requireActual("gatsby")

    return {
        ...gatsby,
        graphql: jest.fn(),
        Link: jest
            .fn()
            .mockImplementation(
                ({
                    activeClassName,
                    activeStyle,
                    getProps,
                    innerRef,
                    partiallyActive,
                    ref,
                    replace,
                    to,
                    ...rest
                }) =>
                    React.createElement("a", {
                        ...rest,
                        href: to,
                        gatsby: "true",
                    }),
            ),
        StaticQuery: jest.fn(),
        useStaticQuery: jest.fn(),
    }
})
