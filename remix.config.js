/** @type {import('@remix-run/dev').AppConfig} */

const config = {
    appDirectory: "src",
    future: {
        unstable_tailwind: true,
        v2_routeConvention: true,
    },
    ignoredRouteFiles: ["**/.*"],
    server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
    serverBuildPath: "api/index.js",
    serverDependenciesToBundle: [/.*/],
}

module.exports = config
