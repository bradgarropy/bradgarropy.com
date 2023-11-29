/** @type {import('@remix-run/dev').AppConfig} */

const config = {
    appDirectory: "src",
    ignoredRouteFiles: ["**/.*"],
    future: {},
    serverDependenciesToBundle: ["shiki"],
    serverModuleFormat: "esm",
}

export default config
