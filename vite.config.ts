import {vitePlugin as remix} from "@remix-run/dev"
import {installGlobals} from "@remix-run/node"
import {vercelPreset} from "@vercel/remix/vite"
import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"
import json5 from "vite-plugin-json5"
import {Mode, plugin as markdown} from "vite-plugin-markdown"
import tsconfigPaths from "vite-tsconfig-paths"

installGlobals()

declare module "@remix-run/node" {
    interface Future {
        v3_singleFetch: true
    }
}

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        json5(),
        markdown({mode: [Mode.MARKDOWN]}),
        process.env.VITEST
            ? react()
            : remix({
                  appDirectory: "src",
                  ignoredRouteFiles: ["**/.*"],
                  future: {
                      v3_fetcherPersist: true,
                      v3_relativeSplatPath: true,
                      v3_throwAbortReason: true,
                      v3_lazyRouteDiscovery: true,
                      v3_singleFetch: true,
                  },
                  presets: [vercelPreset()],
                  serverModuleFormat: "esm",
              }),
    ],
    server: {
        open: true,
        port: 3000,
    },
    test: {
        clearMocks: true,
        coverage: {
            all: false,
            clean: true,
            cleanOnRerun: true,
            enabled: true,
            provider: "v8",
            reporter: ["text", "lcov"],
            reportOnFailure: false,
        },
        environment: "jsdom",
        globals: false,
        passWithNoTests: true,
        setupFiles: ["src/test-utils/setup.tsx"],
    },
})
