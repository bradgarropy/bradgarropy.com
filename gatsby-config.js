require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env.NODE_ENV)
console.log(process.env.CONTEXT)


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
                spaceId: process.env.CONTENTFUL_SPACE,
                accessToken: process.env.CONTENTFUL_TOKEN,
                host: process.env.CONTENTFUL_HOST,
            },
        },
        {
            resolve: "gatsby-transformer-remark",
        },
    ],
}
