/** @type {import('@remix-run/dev').AppConfig} */

const config = {
    appDirectory: "src",
    future: {
        unstable_tailwind: true,
    },
    ignoredRouteFiles: ["**/.*"],
    server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
    serverBuildPath: "api/index.js",
    serverDependenciesToBundle: ["rehype-parse", "rehype-react", "unified"],
}

module.exports = config
