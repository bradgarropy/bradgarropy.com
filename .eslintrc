{
    "extends": [
        "@remix-run/eslint-config",
        "@remix-run/eslint-config/node",
        "@remix-run/eslint-config/jest-testing-library",
        "@bradgarropy/eslint-config",
        "@bradgarropy/eslint-config-react",
        "@bradgarropy/eslint-config-typescript"
    ],
    "rules": {
        // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-events.md#when-not-to-use-it
        "testing-library/no-await-sync-events": [
            "error",
            {
                "eventModules": ["fire-event"]
            }
        ]
    }
}
