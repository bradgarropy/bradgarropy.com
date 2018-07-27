require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
    siteMetadata: {
        title: "bradgarropy",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: [
                    "lato",
                    "righteous",
                ],
            },
        },
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: "gatsby-transformer-remark",
        },
    ],
}
