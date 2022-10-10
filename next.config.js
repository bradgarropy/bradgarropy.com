/**
 * @type {import('next').NextConfig}
 */

const config = {
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US",
    },
    redirects: () => {
        const redirects = [
            {
                source: "/ama",
                destination: "https://github.com/bradgarropy/ama#readme",
                permanent: true,
            },
            {
                source: "/dotfiles",
                destination: "https://github.com/bradgarropy/dotfiles",
                permanent: true,
            },
            {
                source: "/stream",
                destination: "https://twitch.tv/bradgarropy",
                permanent: true,
            },
            {
                source: "/codetunes",
                destination:
                    "https://youtube.com/playlist?list=PL6Mu1AMmTL-vlrGehLTnA_MCjI4Bjx92r",
                permanent: true,
            },
            {
                source: "/discord",
                destination: "https://discord.gg/WxtUPSF",
                permanent: true,
            },
            {
                source: "/donate",
                destination: "https://paypal.me/bradgarropy",
                permanent: true,
            },
            {
                source: "/store",
                destination: "https://cottonbureau.com/people/brad-garropy",
                permanent: true,
            },
            {
                source: "/sponsor",
                destination: "https://github.com/sponsors/bradgarropy",
                permanent: true,
            },
            {
                source: "/podcast",
                destination: "https://webdevweekly.captivate.fm",
                permanent: true,
            },
            {
                source: "/wdw",
                destination: "https://webdevweekly.captivate.fm",
                permanent: true,
            },
            {
                source: "/webdevweekly",
                destination: "https://webdevweekly.captivate.fm",
                permanent: true,
            },
            {
                source: "/subscribe",
                destination: "https://www.getrevue.co/profile/bradgarropy",
                permanent: true,
            },
            {
                source: "/newsletter",
                destination: "https://www.getrevue.co/profile/bradgarropy",
                permanent: true,
            },
        ]

        return redirects
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

module.exports = config
