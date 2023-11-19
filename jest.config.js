const config = {
    clearMocks: true,
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/src/test-utils/setup.tsx"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    moduleNameMapper: {
        "\\.module.css$": "identity-obj-proxy",
        "\\.css$": "<rootDir>/src/test-utils/css.ts",
        "\\.jpg$": "<rootDir>/src/test-utils/image.ts",
        "\\~/components/(.*)$": "<rootDir>/src/components/$1",
        "\\~/context/(.*)$": "<rootDir>/src/context/$1",
        "\\~/hooks/(.*)$": "<rootDir>/src/hooks/$1",
        "\\~/pages/(.*)$": "<rootDir>/src/pages/$1",
        "\\~/styles/(.*)$": "<rootDir>/src/styles/$1",
        "\\~/test-utils/(.*)$": "<rootDir>/src/test-utils/$1",
        "\\~/transformers/(.*)$": "<rootDir>/src/transformers/$1",
        "\\~/types/(.*)$": "<rootDir>/src/types/$1",
        "\\~/utils/(.*)$": "<rootDir>/src/utils/$1",
    },
    testEnvironment: "jsdom",
    transform: {
        "\\.(js|jsx|ts|tsx)$": [
            "babel-jest",
            {
                presets: [
                    "@babel/preset-env",
                    ["@babel/preset-react", {runtime: "automatic"}],
                    "@babel/preset-typescript",
                ],
            },
        ],
    },
    transformIgnorePatterns: [],
}

export default config
