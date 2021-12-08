const config = {
    ci: {
        assert: {
            // preset: "lighthouse:recommended",
        },
        collect: {},
        upload: {
            target: "temporary-public-storage",
        },
    },
}

module.exports = config
