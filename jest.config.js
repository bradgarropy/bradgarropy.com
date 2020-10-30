const config = {
    collectCoverage: true,
    setupFilesAfterEnv: ["./src/test-utils/setup"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
}

module.exports = config
