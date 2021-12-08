const config = {
    ci: {
        assert: {
            assertions: {
                "categories:performance": ["error", {minScore: 0.3}],
                "categories:accessibility": ["error", {minScore: 0.3}],
                "categories:seo": ["error", {minScore: 0.3}],
                "categories:best-practices": ["error", {minScore: 0.3}],
                "categories:pwa": "off",
            },
        },
    },
}

module.exports = config
