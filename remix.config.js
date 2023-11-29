/** @type {import('@remix-run/dev').AppConfig} */

const config = {
    appDirectory: "src",
    ignoredRouteFiles: ["**/.*"],
    future: {},
    serverDependenciesToBundle: [
        "shiki",
        "shiki/**/*",
        "shiki/languages/**/*",
        "shiki/themes/**/*",
    ],
    serverModuleFormat: "esm",
}

export default config
