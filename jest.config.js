const config = {
    clearMocks: true,
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/src/test-utils/setup"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/src/test-utils/file.js",
        "\\.(css)$": "identity-obj-proxy",
    },
    testPathIgnorePatterns: ["<rootDir>/plop"],
}

module.exports = config
