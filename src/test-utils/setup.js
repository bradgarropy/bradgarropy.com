import "jest-styled-components"
import "@testing-library/jest-dom"
import "regenerator-runtime/runtime"

import fetchMock from "jest-fetch-mock"

fetchMock.enableMocks()

jest.mock("gatsby-plugin-image", () => {
    const React = require("react")
    const plugin = jest.requireActual("gatsby-plugin-image")

    const mockImage = ({imgClassName, ...props}) =>
        React.createElement("img", {
            ...props,
            className: imgClassName,
        })

    const mockPlugin = {
        ...plugin,
        GatsbyImage: jest.fn().mockImplementation(mockImage),
        StaticImage: jest.fn().mockImplementation(mockImage),
    }

    return mockPlugin
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
