const config = {
    ci: {
        assert: {
            preset: "lighthouse:recommended",
        },
        collect: {
            staticDistDir: "./public",
        },
        upload: {
            target: "temporary-public-storage",
        },
    },
}

module.exports = config
