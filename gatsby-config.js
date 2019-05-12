require("dotenv").config()

module.exports = {
    siteMetadata: {
        siteUrl: "https://bradgarropy.com",
        title: "bradgarropy",
        description: "🏠 my home on the web",
        keywords: ["gatsby", "react", "scss", "eslint", "blog", "portfolio"],
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
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
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-autolink-headers",
                        options: {
                            maintainCase: false,
                            removeAccents: true,
                        },
                    },
                    {
                        resolve: "gatsby-remark-prismjs",
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-twitter",
        },
    ],
}
