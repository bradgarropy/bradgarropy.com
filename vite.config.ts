import {vitePlugin as remix} from "@remix-run/dev"
import {defineConfig} from "vite"

export default defineConfig({
    plugins: [
        remix({
            appDirectory: "src",
            ignoredRouteFiles: ["**/.*"],
            future: {},
            serverModuleFormat: "esm",
        }),
    ],
    server: {
        open: true,
        port: 3000,
    },
})
