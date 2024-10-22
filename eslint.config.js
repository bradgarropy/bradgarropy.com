import bgConfig from "@bradgarropy/eslint-config"
import bgReactConfig from "@bradgarropy/eslint-config-react"
import bgTypescriptConfig from "@bradgarropy/eslint-config-typescript"

const config = [
    ...bgConfig,
    ...bgReactConfig,
    ...bgTypescriptConfig,
    {
        ignores: [
            // dependencies
            "/node_modules",
            // build
            "/.cache",
            "/build",
            "/public/build",
            "/tsconfig.tsbuildinfo",
            // test
            "/coverage",
            // host
            "/.vercel",
            // secrets
            "/.env*",
            // logs
            "/debug.log",
            // os
            ".DS_Store",
            // generated
            "/public/feed.json",
            "/public/feed.xml",
            "/public/robots.txt",
            "/public/sitemap.txt",
        ],
    },
]

export default config
