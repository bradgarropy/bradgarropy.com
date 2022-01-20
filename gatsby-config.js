const config = {
    plugins: [
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                trackingIds: [process.env.TRACKING_ID],
                gtagConfig: {
                    anonymize_ip: true,
                },
                pluginConfig: {
                    head: true,
                    respectDNT: false,
                },
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
                ],
            },
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
    ],
}

module.exports = config
