const config = {
    ci: {
        assert: {
            "categories:performance": ["warn", {minScore: 0.3}],
            "categories:accessibility": ["error", {minScore: 0.3}],
            "categories:seo": ["error", {minScore: 0.3}],
            "categories:best-practices": ["error", {minScore: 0.3}],
        },
        collect: {},
        upload: {
            target: "temporary-public-storage",
        },
    },
}

module.exports = config
