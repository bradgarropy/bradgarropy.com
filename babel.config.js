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

module.exports = config
