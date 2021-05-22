import "jest-styled-components"
import "@testing-library/jest-dom"
import "regenerator-runtime/runtime"

import fetchMock from "jest-fetch-mock"

fetchMock.enableMocks()

jest.mock("gatsby-plugin-image", () => {
    const React = require("react")
    const gatsbyPluginImage = jest.requireActual("gatsby-plugin-image")

    const mockGatsbyPluginImage = {
        ...gatsbyPluginImage,
        GatsbyImage: jest.fn().mockImplementation(({imgClassName, ...rest}) =>
            React.createElement("img", {
                ...rest,
                className: imgClassName,
            }),
        ),
        StaticImage: jest.fn().mockImplementation(({imgClassName, ...rest}) =>
            React.createElement("img", {
                ...rest,
                className: imgClassName,
            }),
        ),
    }

    return mockGatsbyPluginImage
})

jest.mock("gatsby", () => {
    const React = require("react")
    const gatsby = jest.requireActual("gatsby")

    const mockGatsby = {
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
                    }),
            ),
        StaticQuery: jest.fn(),
        useStaticQuery: jest.fn(),
    }

    return mockGatsby
})
