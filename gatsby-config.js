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


module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-76434003-2",
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
            resolve: "gatsby-plugin-sass",
        },
        {
            resolve: "gatsby-source-contentful",
            options: contentfulOptions,
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-prismjs",
                    },
                ],
            },
        },
    ],
}
