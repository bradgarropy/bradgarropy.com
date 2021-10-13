import "@testing-library/jest-dom"
import "regenerator-runtime/runtime"

jest.mock("gatsby-plugin-image", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
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
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const React = require("react")
    const gatsby = jest.requireActual("gatsby")

    const mockGatsby = {
        ...gatsby,
        graphql: jest.fn(),
        Link: jest.fn().mockImplementation(({to, ...rest}) =>
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
