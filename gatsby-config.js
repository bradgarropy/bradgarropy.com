require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})


let contentfulOptions = {}

if(process.env.CONTEXT === "production") {
    contentfulOptions = {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: process.env.CONTENTFUL_HOST,
    }
}
else {
    contentfulOptions = {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
        host: process.env.CONTENTFUL_PREVIEW_HOST,
    }
}

console.log(contentfulOptions)


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
            options: contentfulOptions,
        },
        {
            resolve: "gatsby-transformer-remark",
        },
    ],
}
