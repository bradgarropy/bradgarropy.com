const config = {
    ci: {
        assert: {
            preset: "lighthouse:recommended",
        },
        upload: {
            target: "temporary-public-storage",
        },
    },
}

module.exports = config
