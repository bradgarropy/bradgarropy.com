require("dotenv").config()

const twitch = require("./src/transformers/twitch")
const youtube = require("./src/transformers/youtube")

const youtubeChannelId = "UCgbFhcZKt36Upo7oxWlLEig"
const captivateRss = "https://feeds.captivate.fm/webdevweekly"
const sentryUrl =
    "https://4d31bd282c17443b9ea608d763b71f79@o1037846.ingest.sentry.io/6005986"

const config = {
    siteMetadata: {
        siteUrl: "https://bradgarropy.com",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-sitemap",
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.TRACKING_ID,
                head: true,
                anonymize: true,
                respectDNT: false,
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                google: {
                    families: [
                        "Righteous:400",
                        "Montserrat:400,500,600,700,800,900",
                        "Open Sans:400,500,600,700,800,900",
                    ],
                },
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: "content/posts",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "content/pages",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "now",
                path: "content/now",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "testimonials",
                path: "content/testimonials",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "static",
            },
        },
        {
            resolve: "gatsby-source-youtube-v3",
            options: {
                channelId: [youtubeChannelId],
                apiKey: process.env.YOUTUBE_API_KEY,
            },
        },
        {
            resolve: "gatsby-source-anchor",
            options: {
                rss: captivateRss,
            },
        },
        {
            resolve: "gatsby-source-github-api",
            options: {
                token: process.env.GITHUB_TOKEN,
                graphQLQuery: `
                    query {
                        user(login: "bradgarropy") {
                            pinnedItems(types: REPOSITORY, first: 6) {
                                nodes {
                                    ... on Repository {
                                        url
                                        name
                                        description
                                        stargazerCount
                                        repositoryTopics(first: 20) {
                                            nodes {
                                                topic {
                                                name
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            sponsorshipsAsMaintainer(first: 10) {
                                nodes {
                                    sponsorEntity {
                                        ... on User {
                                            login
                                            url
                                            avatarUrl
                                        }
                                    }
                                    tier {
                                        name
                                        description
                                        isOneTime
                                    }
                                }
                            }
                        }
                    }
                `,
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 700,
                        },
                    },
                    {
                        resolve: "gatsby-remark-autolink-headers",
                        options: {
                            maintainCase: false,
                            removeAccents: true,
                        },
                    },
                    {
                        resolve: "gatsby-remark-vscode",
                        options: {
                            theme: "Shades of Purple",
                            extensions: ["shades-of-purple"],
                        },
                    },
                    {
                        resolve: "gatsby-remark-embedder",
                        options: {
                            customTransformers: [twitch, youtube],
                        },
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            rel: "noopener noreferrer",
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-twitter",
        },
        {
            resolve: "gatsby-plugin-image",
        },
        {
            resolve: "gatsby-plugin-sharp",
        },
        {
            resolve: "gatsby-transformer-sharp",
        },
        {
            resolve: "gatsby-plugin-catch-links",
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/,
                },
            },
        },
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve(
                    "./src/components/Layout/Layout.tsx",
                ),
            },
        },
        {
            resolve: "@sentry/gatsby",
            options: {
                dsn: sentryUrl,
                sampleRate: 0.7,
            },
        },
        {
            resolve: "@raae/gatsby-plugin-let-it-snow",
            options: {
                colors: ["--snow"],
                duration: 86400,
                intensity: "regular",
                season: {
                    start: new Date("December 1"),
                    end: new Date("January 1"),
                },
            },
        },
    ],
}

module.exports = config
