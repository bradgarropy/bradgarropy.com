import "@testing-library/jest-dom"

jest.mock("@remix-run/react", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const {mockRemix} = require("test-utils/mocks/remix")
    return mockRemix
})
