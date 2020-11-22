const config = {
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/src/test-utils/setup"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    testPathIgnorePatterns: ["<rootDir>/plop"],
}

module.exports = config
