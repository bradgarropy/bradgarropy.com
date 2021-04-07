const createConfig = api => {
    const config = {
        presets: [
            "@babel/preset-env",
            [
                "@babel/preset-react",
                {
                    runtime: "automatic",
                },
            ],
        ],
        plugins: ["@babel/plugin-proposal-class-properties"],
    }

    !api.env("test") &&
        config.plugins.push("babel-plugin-jsx-remove-data-test-id")

    return config
}

module.exports = createConfig
