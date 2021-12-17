module.exports = {
    images: {
        domains: ["artwork.captivate.fm", "i.ytimg.com"],
    },
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        svgo: false,
                    },
                },
            ],
        })

        return config
    },
}
