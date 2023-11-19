import "@testing-library/jest-dom"

jest.mock("@remix-run/react", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const remix = require("~/test-utils/mocks/remix")
    return remix.mockRemix
})
