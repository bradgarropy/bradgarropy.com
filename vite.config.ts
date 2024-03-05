import {vitePlugin as remix} from "@remix-run/dev"
import {installGlobals} from "@remix-run/node"
import {vercelPreset} from "@vercel/remix/vite"
import {defineConfig} from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

installGlobals()

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        remix({
            appDirectory: "src",
            ignoredRouteFiles: ["**/.*"],
            future: {},
            presets: [vercelPreset()],
            serverModuleFormat: "esm",
        }),
    ],
    server: {
        open: true,
        port: 3000,
    },
})
