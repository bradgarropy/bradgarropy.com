require("dotenv").config()

const twitch = require("./src/transformers/twitch")
const youtube = require("./src/transformers/youtube")

const config = {
    siteMetadata: {
        siteUrl: "https://bradgarropy.com",
        title: "bradgarropy",
        description: "🏠 my home on the web",
        keywords: ["gatsby", "react", "scss", "eslint", "blog", "portfolio"],
        email: "bradgarropy@gmail.com",
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
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: [
                    "righteous: 400",
                    "montserrat: 400,500,600,700,800,900",
                    "open sans: 400,500,600,700,800,900",
                ],
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
                path: "content",
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
            resolve: "gatsby-plugin-sharp",
        },
        {
            resolve: "gatsby-transformer-sharp",
        },
    ],
}

module.exports = config
