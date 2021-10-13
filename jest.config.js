const config = {
    clearMocks: true,
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/src/test-utils/setup.ts"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/src/test-utils/svg.ts",
        "\\.(css)$": "<rootDir>/src/test-utils/css.js",
        "@reach/router": "<rootDir>/node_modules/@gatsbyjs/reach-router",
    },
    testEnvironment: "jsdom",
}

module.exports = config
