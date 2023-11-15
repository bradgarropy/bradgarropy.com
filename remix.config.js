/** @type {import('@remix-run/dev').AppConfig} */

const config = {
    appDirectory: "src",
    ignoredRouteFiles: ["**/.*"],
    future: {},
    server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
    serverBuildPath: "api/index.js",
    serverModuleFormat: "esm",
}

export default config
