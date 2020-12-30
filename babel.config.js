const config = {
    presets: ["next/babel"],
    plugins: [
        [
            "styled-components",
            {
                displayName: true,
                ssr: true,
            },
        ],
    ],
}

module.exports = config
