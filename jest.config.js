const config = {
    collectCoverage: true,
    setupFilesAfterEnv: [
        "./src/test-utils/loader",
        "@testing-library/jest-dom/extend-expect",
    ],
}

module.exports = config
