const config = {
    clearMocks: true,
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/src/test-utils/setup.ts"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    moduleNameMapper: {
        "\\.(css)$": "<rootDir>/src/test-utils/css.js",
        "\\.(jpg)$": "<rootDir>/src/test-utils/image.ts",
        "\\.(svg)$": "<rootDir>/src/test-utils/svg.ts",
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
}

module.exports = config
