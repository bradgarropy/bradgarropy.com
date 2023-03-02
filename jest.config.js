const config = {
    clearMocks: true,
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/src/test-utils/setup.ts"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    moduleNameMapper: {
        "\\.module.css$": "identity-obj-proxy",
        "\\.css$": "<rootDir>/src/test-utils/css.ts",
        "\\.jpg$": "<rootDir>/src/test-utils/image.ts",
    },
    testEnvironment: "jsdom",
    transform: {
        "\\.(js|jsx|ts|tsx)$": [
            "babel-jest",
            {
                presets: ["next/babel"],
            },
        ],
    },
    transformIgnorePatterns: [],
}

module.exports = config
