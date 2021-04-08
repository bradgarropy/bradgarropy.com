require("dotenv").config()

const twitch = require("./src/transformers/twitch")
const youtube = require("./src/transformers/youtube")

const youtubeChannelId = "UCgbFhcZKt36Upo7oxWlLEig"

const config = {
    siteMetadata: {
        siteUrl: "https://bradgarropy.com",
        url: "https://bradgarropy.com",
        title: "bradgarropy",
        description: "🏠 my home on the web",
        keywords: ["gatsby", "react", "scss", "eslint", "blog", "portfolio"],
        email: "bradgarropy@gmail.com",
        twitter: "bradgarropy",
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
            resolve: "gatsby-plugin-styled-components",
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
                                        repositoryTopics(first: 10) {
                                            nodes {
                                                topic {
                                                name
                                                }
                                            }
                                        }
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
            resolve: "@bradgarropy/gatsby-plugin-seo",
        },
    ],
}

module.exports = config
