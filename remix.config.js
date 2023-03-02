/** @type {import('@remix-run/dev').AppConfig} */

const config = {
    appDirectory: "src",
    future: {
        unstable_tailwind: true,
    },
    ignoredRouteFiles: ["**/.*"],
    server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
    serverBuildPath: "api/index.js",
    serverDependenciesToBundle: [
        "rehype-parse",
        "rehype-react",
        "unified",
        "@bradgarropy/rehype-cloudinary-image-size",
        "hast-util-is-element",
        "unist-util-visit",
        "@bradgarropy/rehype-image-links",
        "rehype-external-links",
        "rehype-raw",
        "rehype-stringify",
        "remark-gfm",
        "remark-inline-links",
        "remark-parse",
        "remark-rehype",
        "remark-unwrap-images",
    ],
}

module.exports = config
