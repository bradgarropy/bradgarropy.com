import "@testing-library/jest-dom"

jest.mock("@remix-run/react", () => {
    const MockLink = ({to, children}: any) => <a href={to}>{children}</a>

    return {
        Link: MockLink,
    }
})
